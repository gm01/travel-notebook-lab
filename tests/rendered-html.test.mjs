import assert from "node:assert/strict";
import test from "node:test";
import { stops, itinerary, stays, lodgingTotalKRW } from "../app/trip-data.ts";

async function render() {
  const { default: worker } = await import("../dist/server/index.js");
  return worker.fetch(new Request("http://localhost/", {headers:{accept:"text/html"}}),
    {ASSETS:{fetch:async()=>new Response("Not found",{status:404})}},
    {waitUntil(){},passThroughOnException(){}});
}
test("13 nights are contiguous and match each booked date range", () => {
  assert.deepEqual(stops.map(s=>s.nights),[4,4,3,2]);
  assert.equal(stops.reduce((sum,s)=>sum+s.nights,0),13);
  stops.forEach((s,i)=>{
    assert.equal((Date.parse(s.checkout)-Date.parse(s.checkin))/86400000,s.nights);
    if(i) assert.equal(stops[i-1].checkout,s.checkin);
  });
  assert.equal(stops[0].checkin,"2026-10-21");
  assert.equal(stops.at(-1).checkout,"2026-11-03");
});
test("14 consecutive local days and nine full non-transfer days",()=>{
  assert.equal(itinerary.length,14);
  itinerary.forEach((day,i)=>{
    const date=new Date(Date.UTC(2026,9,21+i));
    assert.equal(day.date,date.toISOString().slice(5,10).replace("-","."));
    assert.ok(stops.some(s=>s.id===day.region));
  });
  assert.equal(itinerary.filter(d=>d.kind==="FULL").length,9);
  assert.match(itinerary.at(-1).night,/23:05 7C5304/);
});
test("four selected stays match the route and supplied accommodation budget",()=>{
  assert.deepEqual(stays.map(s=>s.region),stops.map(s=>s.id));
  assert.deepEqual(stays.map(s=>s.totalKRW),[154356,518043,388164,400000]);
  assert.equal(lodgingTotalKRW,1460563);
  assert.ok(stays.every(s=>s.confirmed));
  assert.match(stays.find(s=>s.region==="south").caveat,/최종 예약 확인 필요/);
  assert.match(stays.find(s=>s.region==="west").official,/the-jangkar-canggu-guesthouse/);
  assert.match(stays.find(s=>s.region==="west").address,/Tanah Barak No.39C/);
  assert.match(stays.find(s=>s.region==="ubud").address,/Jalan Sri Wedari/);
  assert.match(stays.find(s=>s.region==="ubud").facilities,/호스트에게 확인/);
  assert.equal(stays.find(s=>s.region==="ubud").official,"");
});
test("renders the complete new notebook with honest booking and sync status",async()=>{
  const response=await render();
  assert.equal(response.status,200);
  assert.match(response.headers.get("content-type")??"",/^text\/html/);
  const html=await response.text();
  assert.match(html,/Bali, at our pace\./);
  assert.match(html,/GILI TRAWANGAN/);
  assert.equal((html.match(/class="day"/g)??[]).length,14);
  assert.match(html,/1,460,563/);
  assert.match(html,/확정 숙박 계획/);
  assert.match(html,/래디슨 블루 발리 울루와뚜/);
  assert.doesNotMatch(html,/날짜 넣어 검색|숙소 선택 후 확정|Renaissance|PinkCoco/);
  assert.match(html,/자동으로 바뀌지는 않습니다/);
  assert.doesNotMatch(html,/길리 에어|GILI AIR|SIDEMEN|시드멘|PNR|전자항공권/i);
  for(const id of ["route","stays","spots","checklist"]) assert.ok(html.includes('id="'+id+'"'));
});

"use client";

import { useEffect, useState, type ReactNode } from "react";
import { stops, itinerary, stays, places, transfers, preparation, sources, lodgingTotalKRW, formatKRW, mapSearch, notionUrl, updatedAt } from "./trip-data";

function Link({href, children, className = ""}: {href: string; children: ReactNode; className?: string}) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}
function Heading({no, title, note}: {no:string; title:string; note?:string}) {
  return <div className="section-heading"><div><span className="section-no">{no}</span><h2>{title}</h2></div>{note && <p>{note}</p>}</div>;
}
function Checklist() {
  const [checked, setChecked] = useState<string[]>([]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem("bali-between-us-checklist") ?? "[]");
        if (Array.isArray(saved)) setChecked([...new Set(saved.filter((id): id is string => typeof id === "string" && preparation.some(item => item.id === id)))]);
      } catch { /* Storage can be unavailable. */ }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  function toggle(id: string) {
    const next = checked.includes(id) ? checked.filter(item => item !== id) : [...checked,id];
    setChecked(next);
    try { window.localStorage.setItem("bali-between-us-checklist",JSON.stringify(next)); } catch { /* Keep working in memory. */ }
  }
  return <div className="checklist">
    <div className="checklist-top"><h3>준비 체크리스트</h3><span>{checked.length} / {preparation.length}</span></div>
    <progress value={checked.length} max={preparation.length} aria-label="여행 준비 완료 항목" />
    <p className="muted small">이 기기에 저장됩니다. 노션의 체크 상태와는 별개입니다.</p>
    {preparation.map(item => <label key={item.id} className={checked.includes(item.id) ? "check checked" : "check"}>
      <input type="checkbox" checked={checked.includes(item.id)} onChange={() => toggle(item.id)} />
      <span><strong>{item.title}</strong><small>{item.detail}</small></span><em>{item.when}</em>
    </label>)}
  </div>;
}
export default function Home() {
  return <main id="top">
    <a className="skip-link" href="#route">일정으로 건너뛰기</a>
    <header className="site-header"><div className="header-inner">
      <a href="#top" className="wordmark">BALI<span>/ 2026</span></a>
      <nav aria-label="여행 수첩"><a href="#route">일정</a><a href="#stays">숙소</a><a href="#spots">장소</a><a href="#checklist">준비</a></nav>
      <Link href={notionUrl} className="notion-button">노션 열기</Link>
    </div></header>
    <div className="container">
      <section className="intro" aria-label="여행 개요">
        <div className="intro-copy"><p className="eyebrow">21 OCT — 03 NOV 2026</p><h1>Bali, at our pace.</h1>
          <p className="intro-note">두 사람, 네 곳의 베이스. 13박의 발리.</p>
          <div className="trip-meta"><span>13박 14일</span><span>길리 트라왕안</span><span>인천 도착 11.04</span></div>
          <p className="sync-note"><i aria-hidden="true" />숙소·일정 반영 {updatedAt} <span>· 수동 갱신</span></p>
        </div>
        <figure className="intro-photo"><img src="./images/ubud-rice.jpg" alt="우붓의 계단식 논" width="640" height="360" /><figcaption>UBUD, BALI</figcaption></figure>
      </section>
      <div className="route-overview" aria-label="확정 숙박 배분">
        {stops.map((stop,i) => <a className={"route-stop " + stop.accent} key={stop.id} href={"#days-"+stop.id}>
          <div><span className="stop-index">0{i+1}</span><span className="night-count">{stop.nights}<small>박</small></span></div>
          <h2>{stop.name}</h2><p>{stop.dates}</p><small>{stop.full}</small>
        </a>)}
      </div>
      <div className="route-caption"><span>4 + 4 + 3 + 2 = 13박</span><span>숙소 4곳 선택 완료 · 식당·투어는 후보</span></div>
      <section className="section" id="route">
        <Heading no="01" title="날짜별 일정" note="이동일은 여유롭게. FULL인 날은 메인 일정 한두 개만." />
        {stops.map((stop,index) => <div className={"itinerary-group "+stop.accent} id={"days-"+stop.id} key={stop.id}>
          <div className="chapter"><span>0{index+1}</span><div><p className="eyebrow">{stop.en}</p><h3>{stop.name}</h3><p>{stop.note}</p></div><span className="chapter-dates">{stop.dates}<small>{stop.nights}박 · {stop.full}</small></span></div>
          <div className="day-list">{itinerary.filter(day=>day.region===stop.id).map(day=><article className="day" key={day.date}>
            <div className="day-date"><strong>{day.date}</strong><span>{day.weekday}요일</span><small className={day.kind==="FULL" ? "day-type full" : "day-type"}>{day.kind}</small></div>
            <div className="day-content"><h4>{day.title}</h4><div className="day-slots"><p><b>오전</b>{day.am}</p><p><b>오후</b>{day.pm}</p><p><b>저녁</b>{day.night}</p></div><p className="day-note">{day.note}</p></div>
          </article>)}</div>
        </div>)}
      </section>
      <section className="section" id="transport">
        <Heading no="02" title="이동은 이렇게" note="차량 시간은 계획용 범위입니다. 배 출항 시각은 확정 바우처를 따릅니다." />
        <div className="transfer-grid">{transfers.map(item=><article className="transfer" key={item.date}><span className="eyebrow">{item.date}</span><h3>{item.route}</h3><strong>{item.time}</strong><p>{item.note}</p><Link href={item.href}>이동 정보</Link></article>)}</div>
        <div className="notice"><strong>10/29 본섬 복귀 → 귀국 전 5박 확보</strong><p>왕복 승·하선 항구가 달라질 수 있으니 두 구간을 각각 확인하세요. 보트 체크인은 60분 전, 출항 48–72시간 전과 당일에는 보트사 공지와 <Link href="https://maritim.bmkg.go.id/">BMKG 해상 예보</Link>를 확인합니다.</p></div>
      </section>
      <section className="section" id="stays">
        <Heading no="03" title="확정 숙박 계획" note="4곳 · 13박. 전달한 숙소표와 선택 내역을 반영했습니다." />
        <div className="availability"><span>숙박비 합계</span><p><strong>{formatKRW(lodgingTotalKRW)}</strong> · 4구간 합산, 원화 기준. 포 포인츠 웅아산 2박 203,688원·조식 포함을 반영했습니다.</p></div>
        <div className="stay-grid selected-stays">
          {stays.map(stay => {
            const stop = stops.find(item => item.id === stay.region)!;
            return <article className="stay" key={stay.region}>
              <p className="eyebrow">{stop.name} · {stay.region === "south" ? "예약 확정" : "일정상 확정"}</p><h4>{stay.name}</h4>
              <p className="stay-dates">{stop.dates} · {stop.nights}박</p><p>{stay.note}</p>
              <dl className="stay-details"><div><dt>주소</dt><dd>{stay.address}</dd></div><div><dt>시설</dt><dd>{stay.facilities}</dd></div><div><dt>주변</dt><dd>{stay.nearby}</dd></div></dl>
              <div className="stay-price">{formatKRW(stay.totalKRW)}<small>{stay.caveat}</small></div>
              <div className="card-links"><Link href={mapSearch(stay.mapQuery)}>{stay.region === "ubud" ? "거리 위치 보기" : "숙소 지도"}</Link>{stay.official && <Link href={stay.official}>숙소 안내 · 시설</Link>}</div>
            </article>;
          })}
        </div>
        <p className="footnote">숙소명·금액은 제공 내역 기준입니다. 우붓은 거리 주소만 있어 정확한 숙소 핀과 시설을 확인해야 합니다. 예약번호·호스트 연락처는 표시하지 않으며 추가 비용·조식·취소 조건은 예약 원본을 확인하세요.</p>
      </section>
      <section className="section" id="spots">
        <Heading no="04" title="먹고, 보고, 쉬기" note="숙소 주변 식당·생활 편의와 기존 후보. 우붓은 거리권 후보로, 숙소 바로 옆이라는 뜻은 아닙니다." />
        {stops.map(stop=><div className="places-group" key={stop.id}><div className="group-title"><h3>{stop.name}</h3><span>{stop.dates}</span></div><div className="places-grid">
          {places.filter(place=>place.region===stop.id).map(place=><article className="place" key={place.name}><div className="place-meta"><span>{place.category}</span><small>{place.status}</small></div><h4>{place.name}</h4><p>{place.note}</p><Link href={place.href}>상세 · 지도</Link></article>)}
        </div></div>)}
        <div className="notice"><strong>별도 이동이 큰 후보는 노션에 보관</strong><p>누사페니다·로비나·렘푸양·사누르는 기본 일정에 넣지 않았습니다. 바투르산과 AKASA는 10/31 오전을 대체하는 선택지입니다. 길리에서는 섬 사이를 수영하지 말고, 바다에 들어갈 때 현지 가이드와 조류를 확인하세요.</p></div>
      </section>
      <section className="section" id="checklist">
        <Heading no="05" title="출발 전 준비" note="예약 상세와 두 사람의 공동 메모는 노션에서 관리합니다." />
        <div className="planning-grid"><Checklist /><div className="side-stack">
          <article className="flight-card"><p className="eyebrow">FLIGHTS · 노션 항공권 기준</p><div className="flight"><span>10.21 수 · 7C5303</span><div><strong>ICN<small>15:40</small></strong><span>→</span><strong>DPS<small>21:45</small></strong></div></div><div className="flight"><span>11.03 화 · 7C5304</span><div><strong>DPS<small>23:05</small></strong><span>→</span><strong>ICN<small>07:10 <em>+1일</em></small></strong></div></div><p>인천 도착 11월 4일 수요일<br />모든 시각은 현지 기준 · 발리는 한국보다 1시간 느립니다.</p><Link href="https://www.jejuair.net/en/prepare/flight/viewScheduleInfo.do">항공사 일정 재확인</Link></article>
          <article className="small-card"><h3>입국 서류</h3><p><Link href="https://evisa.imigrasi.go.id/">e-VOA B1</Link> · Rp500k/인 · 30일</p><p><Link href="https://lovebali.baliprov.go.id/">발리 관광세</Link> · Rp150k/인</p><p><Link href="https://allindonesia.imigrasi.go.id/">All Indonesia</Link> · 10/18부터 작성</p><small>공식 정보 09.07 확인. 출발 전 신청 화면에서 조건을 재확인하세요.</small></article>
          <article className="small-card"><h3>달력에 남길 메모</h3><p><b>10.31 · 사라스와티</b><br />우붓의 사원·업장 운영과 교통 확인.</p><p><b>우붓 축제와 겹치지 않음</b><br />2026 축제는 10/21–25, 우붓 체류는 10/29부터.</p></article>
        </div></div>
      </section>
      <section className="section budget-section" id="budget">
        <Heading no="06" title="두 사람의 예산" note="숙박은 제공 금액, 나머지는 계획용 범위입니다. 항공권·쇼핑·여행자보험 제외." />
        <div className="budget-grid"><div><p className="eyebrow">13 NIGHTS · 2 PEOPLE</p><h3>13박 숙박비,<br />{formatKRW(lodgingTotalKRW)}</h3><p>전달한 4곳의 금액을 합산했습니다. 포 포인츠 웅아산은 2박 조식 포함 예약입니다. 숙박은 원화, 현지 예산은 루피아로 구분하며 환율 없이 합산하지 않습니다.</p><Link href={notionUrl}>노션 예산표에 실제 결제액 기록</Link></div>
          <dl className="budget-rows"><div><dt>숙박 13박</dt><dd>{formatKRW(lodgingTotalKRW)}</dd></div><div><dt>식사·카페</dt><dd>Rp7–12M</dd></div><div><dt>보트·기사·현지 이동</dt><dd>Rp7–11M</dd></div><div><dt>투어·스파·비치클럽</dt><dd>Rp5–10M</dd></div><div><dt>비자·관광세 2인</dt><dd>Rp1.3M</dd></div><div><dt>예비비</dt><dd>통화 환산 후 10–15%</dd></div></dl>
        </div>
      </section>
      <section className="source-section" aria-label="정보 출처">
        <div><p className="eyebrow">NOTEBOOK & SOURCES</p><h2>같은 여행, 하나의 기준.</h2><p>숙소·일정은 {updatedAt}에 전달한 선택 내역을 반영했습니다. 숙소와 새 주변 후보는 09.21 확인, 기존 관광·입국 정보는 09.07 조사 기준입니다. 우붓 숙소 시설은 주소만으로 확인할 수 없습니다. 노션을 수정해도 사이트가 자동으로 바뀌지는 않습니다.</p><Link href={notionUrl} className="notion-button">여행 노션으로</Link></div>
        <div className="source-links">{sources.map(source=><Link key={source.url} href={source.url}>{source.label}</Link>)}</div>
      </section>
      <footer><span>BALI / 2026</span><p>10.21 — 11.03 · 인천 도착 11.04</p><button type="button" onClick={()=>window.print()}>수첩 인쇄 ↗</button><small>사진: <Link href="https://unsplash.com/photos/rice-terraces-jN9JnZ-SyVc">Radoslav Bali / Unsplash</Link></small></footer>
    </div>
  </main>;
}

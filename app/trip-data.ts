export const updatedAt = "2026.09.21";
export const notionUrl = "https://app.notion.com/p/3b5062d2c59e8000aa44c5b8f15ace62";
export const booking = (name: string, checkin: string, checkout: string) =>
  "https://www.booking.com/searchresults.ko.html?" + new URLSearchParams({ss: name, checkin, checkout, group_adults: "2", no_rooms: "1", group_children: "0", selected_currency: "KRW"}).toString();

export const stops = [
  {id:"west", name:"짱구 · 스미냑", en:"CANGGU / SEMINYAK", checkin:"2026-10-21", checkout:"2026-10-25", dates:"10.21 — 10.25", nights:4, full:"온전한 3일", note:"The Jangkar 4박. 타나바락·에코비치 중심, 스미냑은 하루 외출.", accent:"west"},
  {id:"gili", name:"길리 트라왕안", en:"GILI TRAWANGAN", checkin:"2026-10-25", checkout:"2026-10-29", dates:"10.25 — 10.29", nights:4, full:"온전한 3일", note:"폰테 빌라 4박. 스노클링·자전거·숙소 휴식.", accent:"gili"},
  {id:"ubud", name:"우붓", en:"UBUD", checkin:"2026-10-29", checkout:"2026-11-01", dates:"10.29 — 11.01", nights:3, full:"온전한 2일", note:"Sri Wedari 거리권 3박. 북쪽 논 전망과 시내를 하루씩.", accent:"ubud"},
  {id:"south", name:"울루와뚜", en:"ULUWATU", checkin:"2026-11-01", checkout:"2026-11-03", dates:"11.01 — 11.03", nights:2, full:"1일 + 귀국일 낮", note:"포 포인츠 웅아산 2박 확정·조식 포함. 11/3 저녁 공항으로.", accent:"south"},
];

export const itinerary = [
  {date:"10.21", weekday:"수", region:"west", kind:"도착", title:"밤 도착, 숙소로 바로", am:"12:40 인천 T1 도착 · 15:40 7C5303 출발", pm:"21:45 발리 도착 · 입국과 수하물 수령", night:"예약 차량으로 The Jangkar 이동 · 야간 체크인", note:"입국 1–2시간 + 차량 45–90분 계획. 숙소 체크인 안내는 24시까지이므로 자정 이후 입실 승인을 반드시 미리 받고 10/21 예약 유지."},
  {date:"10.22", weekday:"목", region:"west", kind:"FULL", title:"늦은 브런치와 첫 선셋", am:"늦잠 · Sensorium 브런치", pm:"The Jangkar 수영장 휴식 → 에코비치 산책", night:"La Baracca Canggu 저녁 → 숙소 복귀", note:"Sensorium은 Batu Mejan 거리, La Baracca는 숙소와 같은 Tanah Barak No.51. 도착 다음 날은 이 일대만, 브런치 대기 시 I Am Vegan Babe로."},
  {date:"10.23", weekday:"금", region:"west", kind:"FULL", title:"서핑하고, 핀즈에서 쉬기", am:"I Am Vegan Babe 아침 · 강사와 초보 서핑", pm:"숙소에서 샤워·휴식 → 차량으로 베라와 FINNS", night:"핀즈 선셋 · 숙소로 복귀", note:"서핑 시간·해변은 강사와 조수에 맞춰 확정. FINNS는 베라와 쪽 별도 이동으로 묶고, 숙소까지 해변 도보 이동으로 잡지 않기."},
  {date:"10.24", weekday:"토", region:"west", kind:"FULL", title:"스미냑을 걷는 하루", am:"스미냑 숍·카페 산책", pm:"스미냑 마사지 · 카페 · 여행용 소액 현금 준비", night:"KU DE TA 선셋 · 길리행 짐 정리", note:"짱구↔스미냑은 편도 약 30–90분 계획. 다음 날 출항 때문에 밤 일정을 짧게."},
  {date:"10.25", weekday:"일", region:"gili", kind:"이동", title:"길리 트라왕안으로", am:"예약 픽업 → 세랑안 항구 · 출항 60분 전 도착", pm:"오전 패스트보트 · 폰테 빌라에 짐 맡기기·체크인", night:"폰테 빌라 휴식 → 마을 산책 · 레지나 피제리아", note:"남부 숙소는 세랑안 출항 우선 비교. 실제 시간은 바우처 기준, 문에서 문까지 약 5–7시간을 확보."},
  {date:"10.26", weekday:"월", region:"gili", kind:"FULL", title:"거북이를 만나는 오전", am:"08:00 전후 3섬 스노클링 · 주나투어 후보", pm:"점심 · 폰테 빌라 휴식 · 낮잠", night:"서쪽 해변 선셋 · Pacifica 후보", note:"주나투어 집결지는 예약 전에 확인. 가이드·구명조끼 포함, 거북이와 산호를 만지지 않기."},
  {date:"10.27", weekday:"화", region:"gili", kind:"FULL", title:"자전거로 섬 한 바퀴", am:"자전거 대여 · 동북쪽 해변 산책", pm:"키라키라 올데이 · 숙소 휴식", night:"CLOUD9 외부 방문 또는 폰테 빌라 근처 저녁", note:"모래 구간은 끌고 걷기. 북동쪽 거북이 포인트도 조류와 보트 통로 확인 후 입수."},
  {date:"10.28", weekday:"수", region:"gili", kind:"FULL", title:"빈칸으로 남긴 섬의 하루", am:"날씨가 좋으면 추가 스노클링 또는 늦잠", pm:"마사지 · 한식 또는 로컬 식사", night:"마지막 노을 · 다음 날 보트 재확인", note:"10/26 바다가 좋지 않았다면 오늘로 투어를 옮길 수 있도록 여유를 남김."},
  {date:"10.29", weekday:"목", region:"ubud", kind:"이동", title:"길리에서 우붓으로", am:"오전 보트 → 파당바이 항구", pm:"예약 차량으로 우붓 · 약 1.5–2.5시간", night:"Sri Wedari 숙소 입실 · 근처 저녁·생수 구입", note:"폰테 체크아웃 후 항구 이동. 전체 5–7시간 계획. 호스트에게 정확한 지도 핀·차량 진입·열쇠 수령을 확인하고, 도착일 식당·스파는 예약하지 않기."},
  {date:"10.30", weekday:"금", region:"ubud", kind:"FULL", title:"논 전망과 긴 휴식", am:"크레타야 우붓 · 논 전망과 수영", pm:"Sri Wedari 복귀 · Mahayoga Spa 후보 · 숙소 휴식", night:"Keenandra 또는 숙소 가까운 식당에서 저녁", note:"크레타야·뜨갈랄랑은 북쪽 외출로 묶기. Mahayoga·Keenandra는 Sri Wedari No.777: 숙소 핀과 비교 후 선택, 멀면 호스트 추천 스파로 대체."},
  {date:"10.31", weekday:"토", region:"ubud", kind:"FULL", title:"몽키포레스트와 시내 산책", am:"09:00 몽키포레스트", pm:"Pison 점심 → 우붓 시장·왕궁 주변 → Tukies", night:"Hujan Locale 저녁 후보 → Sri Wedari 숙소 복귀", note:"몽키포레스트에서 시내로 북상하는 하루. Hujan은 Sri Wedari No.5, 예약 권장. 사라스와티 의식일이라 운영·교통 확인, 숙소까지 도보 가능 여부는 핀 확인 후 결정."},
  {date:"11.01", weekday:"일", region:"south", kind:"이동", title:"우붓에서 웅아산 호텔로", am:"조식 · 10:30 전후 체크아웃", pm:"차량 약 2.5–4시간 · 포 포인츠 웅아산 15:00 체크인", night:"호텔 수영장 휴식 · Evolution Restaurant 저녁", note:"15:00 체크인 · 디럭스 킹룸·코트야드 뷰. 도착일은 해변 왕복 없이 호텔에서 휴식, 다음 두 아침은 포함된 조식 이용."},
  {date:"11.02", weekday:"월", region:"south", kind:"FULL", title:"바다와 케착 공연", am:"포함된 호텔 조식 · 수영장 휴식", pm:"호텔에서 점심·샤워 → 차량으로 울루와뚜 사원 · 16:00 도착 목표", night:"18:00 케착 공연 후보 · 가까운 곳에서 저녁", note:"웅아산→사원은 계획용 편도 45–75분 여유. 해변이 꼭 좋다면 수영장 대신 멜라스티 오전 방문, 호텔 복귀·샤워 후 사원으로. 두 해변을 한날에 묶지 않기."},
  {date:"11.03", weekday:"화", region:"south", kind:"귀국", title:"마지막 수영, 23:05 비행", am:"포함된 호텔 조식 · 수영 · 12:00 체크아웃", pm:"호텔 짐 보관 사전 문의 · Escape Spa 또는 카페 · 16:30–17:00 이른 저녁", night:"18:00–18:30 차량 출발 → 20:00 DPS → 23:05 7C5304", note:"12시 이후 객실 사용·수영·샤워는 자동 포함되지 않음. 레이트 체크아웃·데이유즈는 호텔 확인 후 추가. 인천 도착 11/4 07:10."},
];

export const stays = [
  {region:"west", name:"The Jangkar Canggu Guesthouse", confirmed:true, totalKRW:154356,
    address:"Jl. Tanah Barak No.39C, Canggu, 80352, Indonesia", mapQuery:"The Jangkar Canggu Guesthouse Tanah Barak 39C",
    facilities:"야외 수영장 · 무료 Wi-Fi · 에어컨 · 전용 욕실 · 무료 주차 · 유료 셔틀",
    nearby:"같은 Tanah Barak 거리: I Am Vegan Babe No.49, La Baracca No.51. 편의점·세탁소 위치는 체크인 때 확인.",
    note:"10/21부터 4박. 숙소 주변 브런치와 에코비치, 스미냑 외출을 분리해 이동을 줄입니다.",
    caveat:"Booking 안내: 체크인 14:00–24:00·체크아웃 07:00–12:00. 자정 이후 도착은 사전 승인 필수. 객실별 시설·조식 포함은 예약 원본 기준.",
    official:"https://www.booking.com/hotel/id/the-jangkar-canggu-guesthouse.ko.html"},
  {region:"gili", name:"폰테 빌라 · Ponte Villas", confirmed:true, totalKRW:518043,
    address:"Gili Trawangan, North Lombok, Indonesia", mapQuery:"Ponte Villas Gili Trawangan",
    facilities:"리셉션 운영 · 보트·픽업 연결 문의 가능. 전용 풀·조식은 예약 객실에 따라 확인.",
    nearby:"도착일은 마을 식사, 서쪽 선셋 바는 별도 외출로 구성. 항구↔숙소 짐 이동은 리셉션 문의.",
    note:"10/25부터 4박. 스노클링과 자전거 외출 사이에 숙소에서 쉬는 시간을 확보합니다.",
    caveat:"체크인·체크아웃 시간, 객실 유형과 추가 서비스 요금은 예약 내역 기준.",
    official:"https://pontevillas.com/"},
  {region:"ubud", name:"우붓 에어비앤비 · Sri Wedari", confirmed:true, totalKRW:388164,
    address:"Jalan Sri Wedari, Kecamatan Ubud, Bali 80571, Indonesia", mapQuery:"Jalan Sri Wedari Ubud Bali",
    facilities:"주소만 확인됨. 수영장·주방·세탁기·에어컨·조식·주차 여부는 호스트에게 확인.",
    nearby:"Sri Wedari 거리권: Hujan Locale No.5, Mahayoga Spa·Keenandra No.777. 도로 구간이 길어 숙소 바로 옆이라는 뜻은 아닙니다.",
    note:"10/29부터 3박. 북쪽 논 전망 하루, 몽키포레스트·시내 하루로 나눕니다.",
    caveat:"건물 번호·숙소 핀이 없어 도보 시간 산정 불가. 지도는 거리 검색 결과이며 숙소 핀이 아닙니다. 기사에게 호스트의 정확한 핀을 전달하세요.",
    official:""},
  {region:"south", name:"포 포인츠 바이 쉐라톤 발리, 웅아산", confirmed:true, totalKRW:203688,
    address:"Jalan Raya Uluwatu, Banjar Giri Dharma Ungasan, Kuta Selatan, Bali 80364, Indonesia", mapQuery:"Four Points by Sheraton Bali Ungasan",
    facilities:"야외 수영장 · Escape Spa · 피트니스 · Evolution Restaurant and Bar · 구내 편의점 · 주차",
    nearby:"웅아산 거점. 해변 바로 앞 숙소가 아니므로 울루와뚜 사원·해변은 차량 외출로 계획. 식사·스파는 호텔 안에서도 가능.",
    note:"11/1–3, 2박 예약 확정. 디럭스룸 · 킹베드 1개 · 코트야드 뷰 · 객실 1개 · 성인 2명 · 조식 포함.",
    caveat:"예약확인서: 11/1 15:00 체크인, 11/3 12:00 체크아웃. 체크인 마감 02:00 안내. 추가 시설 이용·스파·셔틀 요금은 별도 확인.",
    official:"https://www.marriott.com/en-us/hotels/dpsfg-four-points-bali-ungasan/overview/"},
];
export const mapSearch = (query: string) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
export const lodgingTotalKRW = stays.reduce((sum, stay) => sum + stay.totalKRW, 0);
export const confirmedLodgingKRW = stays.filter(stay => stay.confirmed).reduce((sum, stay) => sum + stay.totalKRW, 0);
export const formatKRW = (amount: number) => amount.toLocaleString("ko-KR") + "원";

export const places = [
  {region:"south",name:"Evolution Restaurant and Bar",category:"호텔 내 · 조식·식사",status:"공식 확인 · 06:30–23:00",note:"포 포인츠 웅아산 루프톱 식당. 11/1 저녁, 11/2·3 포함 조식 이용. 운영시간과 조식 제공시간은 다르므로 체크인 때 확인.",href:"https://www.marriott.com/en-us/hotels/dpsfg-four-points-bali-ungasan/dining/"},
  {region:"south",name:"Escape Spa · 호텔 수영장",category:"호텔 내 · 휴식",status:"공식 시설 확인",note:"11/2 오전은 수영장 중심. 11/3 스파는 사전 예약 후보이며 체크아웃 후 짐 보관·샤워·시설 이용과 별도 요금을 확인.",href:"https://www.marriott.com/en-us/hotels/dpsfg-four-points-bali-ungasan/experiences/"},
  {region:"south",name:"멜라스티 해변",category:"차량 외출 · 선택",status:"11/2 오전 대안",note:"호텔 수영장 대신 바다를 원할 때만. 차량으로 왕복하고 호텔에서 샤워 후 사원으로 이동. 해변 운영·조수와 귀환 차량은 당일 확인.",href:mapSearch("Melasti Beach Ungasan")},

  {region:"west",name:"I Am Vegan Babe",category:"숙소 주변 · 브런치",status:"공식 확인 09.21 · 07:00–22:00",note:"Tanah Barak No.49. 식물성 브런치·커피, 10/23 서핑 전 아침이나 Sensorium 대기 시 대안.",href:"https://iamveganbabe.com/"},
  {region:"west",name:"La Baracca Canggu",category:"숙소 주변 · 저녁",status:"공식 지점 안내 확인 09.21",note:"Tanah Barak No.51. The Jangkar와 같은 거리의 이탈리안 식당. 10/22 저녁 후보, Canggu 지점으로 확인.",href:"https://linktr.ee/labaraccabali"},
  {region:"west",name:"편의점·세탁소 찾기",category:"생활 편의",status:"지도 검색 · 개별 지점 미확인",note:"10/22 낮에 생수·간식 구입과 세탁 마감시간 확인. 호텔 골목 입구를 픽업 지점으로 쓸 수 있는지도 리셉션에 문의.",href:mapSearch("convenience store laundry near The Jangkar Canggu Guesthouse")},
  {region:"ubud",name:"Hujan Locale",category:"Sri Wedari · 저녁",status:"공식 주소 확인 09.21",note:"Sri Wedari No.5. 현대 인도네시아 요리, 10/31 시내 산책 후 저녁 후보. 예약 권장, 숙소까지 거리는 정확한 핀 확인 후.",href:"https://hujanlocale.com/"},
  {region:"ubud",name:"Mahayoga Spa · Keenandra",category:"Sri Wedari · 스파·식사",status:"공식 주소 확인 09.21",note:"Sri Wedari No.777. 10/30 북쪽 관광 후 후보. 외부 손님 이용·시간·가격을 문의하고 숙소 핀과 가까운지 비교.",href:"https://mahayogaubud.com/"},
  {region:"ubud",name:"Kimia Farma Ubud Raya",category:"생활 편의 · 약국",status:"공식 지점 확인 09.21",note:"Jl. Raya Ubud, Taman Kaja. 공식 안내 08:00–23:00. 필요한 일반 용품은 시내 방문 때 구입, 숙소 바로 옆 지점은 아님.",href:"https://www.kimiafarmaapotek.co.id/outlets/"},

  {region:"west",name:"Sensorium",category:"브런치",status:"공식 메뉴 확인",note:"브런치 라멘·미소 팬케이크, 10/22 느린 아침에.",href:"https://www.sensoriumbali.co.id/menu"},
  {region:"west",name:"FINNS Beach Club",category:"비치클럽",status:"11:00–24:00",note:"성인 전용, 무료 입장 구역 운영. 데이베드 최소 주문은 별도. 10/23 오후.",href:"https://finnsbeachclub.com/"},
  {region:"west",name:"KU DE TA",category:"선셋 · 식사",status:"공식 예약 확인",note:"10/24 스미냑 선셋 후보. 좌석 종류·이벤트별 예약 조건 확인.",href:"https://kudeta.com/"},
  {region:"west",name:"초보 서핑",category:"액티비티",status:"방문 후보",note:"10/23 오전, 강사와 조수·파도에 맞춰 장소 결정. 서핑 강습은 비치클럽과 별도로 예약.",href:"https://www.google.com/maps/search/?api=1&query=surf+lessons+Canggu"},
  {region:"west",name:"Laci",category:"식사",status:"지점 확인 필요",note:"정확한 상호·위치를 확인한 뒤 식사에 추가.",href:"https://blog.naver.com/andy317/223420531914"},
  {region:"west",name:"데우스 · 스미냑 쇼핑",category:"쇼핑",status:"방문 후보",note:"티셔츠·작은 기념품. 10/24에 묶고 꾸따 쇼핑몰은 비 오는 날 대안.",href:"https://www.google.com/maps/search/?api=1&query=Deus+Ex+Machina+Canggu"},
  {region:"gili",name:"3섬 스노클링 · 주나투어",category:"액티비티",status:"미예약",note:"10/26 오전 우선. 출발섬·집결지·보트·가이드·구명조끼·사진 포함을 업체에 확인.",href:"https://blog.naver.com/cat_veling/224122697812"},
  {region:"gili",name:"Regina Pizzeria",category:"피자",status:"방문 후보",note:"길리 트라왕안 식당. 10/25 도착 후 마을 산책과 함께.",href:"https://maps.app.goo.gl/5CKBb34o4TzGaa4TA"},
  {region:"gili",name:"Pacifica · Cocana",category:"선셋 · 식사",status:"공식 운영 확인",note:"코카나 리조트의 식사 후보. 비치클럽은 현재 Cocana Sunset Club 명칭도 사용.",href:"https://cocanaresorts.com/location/pacifica/"},
  {region:"gili",name:"CLOUD9",category:"해변 바",status:"방문 후보",note:"펄 선셋 쪽 저녁 후보. 외부 방문·좌석·영업시간은 방문 전 확인.",href:"https://maps.app.goo.gl/5Tynbt7KMHvREMmo8"},
  {region:"gili",name:"키라키라 올데이",category:"카페",status:"방문 후보",note:"말차라떼 한 잔. 10/27 자전거 산책 도중 쉬어가기.",href:"https://maps.app.goo.gl/HN2eGUZbzsZr9dvWA"},
  {region:"gili",name:"파인트리 · 한식",category:"식사",status:"방문 후보",note:"순두부찌개가 생각날 때. 10/28 자유일의 선택지.",href:"https://maps.app.goo.gl/FpXSmMVQsS4WczBs9"},
  {region:"gili",name:"Turtle Point",category:"바다",status:"당일 조류 확인",note:"이른 오전에도 현지 가이드와 조류·보트 동선을 확인한 뒤 입수.",href:"https://maps.app.goo.gl/RVNxfSmaLH1Rw8NX9"},
  {region:"ubud",name:"Cretya Ubud",category:"논 전망 · 수영",status:"07:00–21:00 · 18+",note:"공식 FDC Rp220k/인, 첫 음료 포함. 데이베드·이벤트 별도 조건. 10/30 오전.",href:"https://cretyaubud.com/en/cretya-ubud"},
  {region:"ubud",name:"Monkey Forest",category:"관광",status:"09:00–18:00 · Rp130k",note:"최종 입장 17:00. 10/31 09:00 방문, 음식과 소지품은 가방에.",href:"https://monkeyforestubud.com/visit/"},
  {region:"ubud",name:"Pison Ubud",category:"식사 · 카페",status:"07:00–23:00",note:"하노만 거리의 논 전망 식당, 10/31 몽키포레스트 후 점심에.",href:"https://pisonindonesia.com/pison-ubud/"},
  {region:"ubud",name:"푸트리 스파",category:"마사지",status:"지점 확인 필요",note:"그린타라·옌즈와 함께 비교해 하루 한 곳만. 숙소와 가까운 지점 우선.",href:"https://maps.app.goo.gl/CjN1e9gUPUNjgiYZ9"},
  {region:"ubud",name:"투키즈 코코넛",category:"디저트",status:"방문 후보",note:"시내 산책 뒤 코코넛 아이스크림. 10/30 또는 10/31에.",href:"https://maps.app.goo.gl/AdK7FnMt11j4cDaU9"},
  {region:"ubud",name:"와룽 부 루스",category:"로컬 식사",status:"방문 후보",note:"폭립 식사 후보. 가라시·트로피칼 뷰도 대안.",href:"https://maps.app.goo.gl/AT3jyH4U2RYWbDDf6"},
  {region:"south",name:"Sundays Beach Club",category:"해변",status:"07:30–22:00 · Rp800k",note:"Rp500k 식음 크레딧 포함, 일반 입장은 선착순. 선택 일정: 11/2 리조트 휴식 대신 오전에만 방문.",href:"https://www.sundaysbeachclub.com/daily-beach-pass/"},
  {region:"south",name:"Uluwatu Temple · Kecak",category:"사원 · 공연",status:"18:00 회차 후보",note:"11/2 16:00 전후 사원 도착. 공연과 사원 입장은 별도, 예약 회차·요금 재확인.",href:"https://uluwatutemple.com/"},
  {region:"south",name:"Mana Uluwatu",category:"식사",status:"예약 확인",note:"웅아산 숙소에서는 별도 차량 이동이 필요한 선택지. 11/1 기본 저녁은 호텔 Evolution으로, 외출 시 이동·귀환 차량 확인.",href:"https://uluwatusurfvillas.com/restaurant/"},
  {region:"south",name:"키식 · 혼젠",category:"짐바란 식사",status:"방문 후보",note:"아야나 내 식사 후보. 11/3 공항 가는 길에 넣는다면 이른 저녁 운영과 예약 시간을 먼저 확인.",href:"https://maps.app.goo.gl/zRFxR6LmtrSnHbLS8"},
];

export const transfers = [
  {date:"10.21",route:"DPS → 짱구·스미냑",time:"입국 후 차량 약 45–90분",note:"21:45 착륙. 10/21 객실 예약을 유지하고 자정 이후 도착 가능성을 숙소에 전달.",href:"https://www.jejuair.net/en/prepare/flight/viewScheduleInfo.do"},
  {date:"10.25",route:"남부 → 세랑안 → 길리 T",time:"문에서 문까지 약 5–7시간",note:"남부는 세랑안 출항 우선 비교. 파당바이 출항은 육로가 길지만 항해가 짧을 수 있어 총 이동·멀미를 함께 비교.",href:"https://bluewater-express.com/schedules/"},
  {date:"10.29",route:"길리 T → 파당바이 → 우붓",time:"문에서 문까지 약 5–7시간",note:"복귀는 우붓으로 가기 좋은 파당바이 하선. 방살 기항·항만 허가로 늦어질 수 있어 저녁 예약을 비우기.",href:"https://bluewater-express.com/schedules/"},
  {date:"11.01",route:"우붓 에어비앤비 → 포 포인츠 웅아산",time:"차량 약 2.5–4시간",note:"호스트 체크아웃 시간과 픽업 위치 확인. 10:30 전후 출발 계획, 포 포인츠 15:00 체크인 후 휴식.",href:"https://www.google.com/maps/dir/Ubud/Uluwatu/"},
  {date:"11.03",route:"포 포인츠 웅아산 → DPS",time:"18:00–18:30 출발 · 20:00 도착 목표",note:"23:05 7C5304. 짐 보관·체크아웃 후 샤워·시설 이용은 호텔 확인. 웅아산 출발 차량을 미리 예약하고 교통에 따라 더 일찍 출발.",href:"https://www.jejuair.net/en/prepare/flight/viewScheduleInfo.do"},
];

export const preparation = [
  {id:"passport",title:"여권과 항공권 확인",detail:"여권 유효기간 6개월 이상 · 영문명 일치 · 예약 원본은 노션",when:"지금"},
  {id:"stay-details",title:"숙소 예약 조건·주소 확인",detail:"The Jangkar 자정 이후 입실 · 우붓 정확한 핀·시설 · 폰테 객실 조건 · 포 포인츠 조식 시간·체크아웃 후 짐 보관",when:"출발 전"},
  {id:"late-arrival",title:"첫날 야간 체크인 연락",detail:"The Jangkar 체크인 마감 24시 · 10/22 새벽 입실 사전 승인",when:"예약할 때"},
  {id:"boat",title:"길리 보트 두 구간 예약",detail:"10/25 길리 T행 · 10/29 파당바이행 · 픽업과 항구세 확인",when:"미리"},
  {id:"dinner",title:"투어·스파·케착 예약",detail:"10/26 스노클링 · 10/30 스파 · 11/2 케착",when:"미리"},
  {id:"visa",title:"e-VOA B1",detail:"공식 비자 수수료 Rp500k/인 · 30일 체류",when:"출발 전"},
  {id:"levy",title:"발리 관광세",detail:"Rp150k/인 · 납부 QR 저장 · 길리 복귀 때도 보관",when:"출발 전"},
  {id:"arrival",title:"All Indonesia 작성",detail:"입국 3일 전인 10/18부터 · QR 오프라인 저장",when:"10.18부터"},
  {id:"weather",title:"보트·날씨 재확인",detail:"출항 48–72시간 전과 당일 · BMKG와 보트사 안내",when:"출항 전"},
  {id:"bags",title:"짐과 휴대폰 준비",detail:"여행자보험 · eSIM · 방수팩 · 멀미약 · WhatsApp·Gojek",when:"짐 쌀 때"},
  {id:"flight",title:"귀국 준비",detail:"11/3 23:05 출발 · 11/4 07:10 도착 · 공항차와 데이유즈",when:"귀국 전"},
];

export const sources = [
  {label:"The Jangkar 시설·이용수칙",url:"https://www.booking.com/hotel/id/the-jangkar-canggu-guesthouse.ko.html"},
  {label:"I Am Vegan Babe",url:"https://iamveganbabe.com/"},
  {label:"La Baracca 지점 안내",url:"https://linktr.ee/labaraccabali"},
  {label:"Hujan Locale",url:"https://hujanlocale.com/"},
  {label:"Mahayoga Spa·Keenandra",url:"https://mahayogaubud.com/"},

  {label:"폰테 빌라 · 09.21 확인",url:"https://pontevillas.com/"},
  {label:"포 포인츠 웅아산 시설·체크인",url:"https://www.marriott.com/en-us/hotels/dpsfg-four-points-bali-ungasan/overview/"},
  {label:"보트 노선·체크인",url:"https://bluewater-express.com/schedules/"},
  {label:"FINNS 운영",url:"https://finnsbeachclub.com/"},
  {label:"크레타야 요금",url:"https://cretyaubud.com/en/cretya-ubud"},
  {label:"몽키포레스트 요금",url:"https://monkeyforestubud.com/visit/"},
  {label:"Sundays 패스",url:"https://www.sundaysbeachclub.com/daily-beach-pass/"},
  {label:"e-VOA 안내",url:"https://ngurahrai.imigrasi.go.id/layanan-wna/"},
  {label:"발리 관광세",url:"https://lovebali.baliprov.go.id/faq"},
  {label:"All Indonesia 안내",url:"https://bengkalis.imigrasi.go.id/2025/08/28/pemerintah-rilis-all-indonesia-integrated-passenger-declaration-system/"},
  {label:"2026 우붓 축제",url:"https://ubudwritersfestival.com/news/extraordinary-voices-and-bold-thinkers-announced-for-festival-2026"},
  {label:"2026 사라스와티",url:"https://bimashindu.kemenag.go.id/storage/files/Hari%20Libur%20Nasional%2C%20Libur%20Fakultatif%2C%20dan%20Cuti%20Bersama%20Tahun%202026.pdf"},
];

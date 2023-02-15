let widget = new ListWidget();

// 위젯의 배경 색을 설정합니다.
widget.backgroundColor = Color.blue();

// 위젯에 텍스트를 추가합니다.
let title1 = widget.addText("채널명");
let title2 = widget.addText("부제");

// 현 위치에 문장의 위아래 간격을 삽입합니다.
widget.addSpacer(1);

let subtitle = widget.addText("최신 스트리밍 재생");

// 추가한 텍스트의 크기와 색을 설정합니다.
/* 
글자의 색 변경 방법
1. 미리 선언되어있는 색을 사용 => title.textColor = Color.white();
2. Hex 코드를 사용하여 변경 => title.textColor = new Color("#000000");
*/
title1.font = Font.systemFont(30);
title2.font = Font.systemFont(24)
title2.textColor = new Color("#FFC608");

// 위젯을 사용하도록 추가합니다.
Script.setWidget(widget);
Script.complete();

// 찾고자하는 유튜브 채널의 실시간탭을 클릭후 url주소를 복사하여 ""안에 붙여넣습니다. - "https://youtube.com/@채널명/streams"
const url = "";

let wv = new WebView();
await wv.loadURL(url);

let js = `
    let list = [];
    
    list = document.querySelectorAll("#video-title-link");

    let result = list[0].getAttribute("href");
    
    console.log("found url : " + result);
        
    completion(result);
`;

let link = await wv.evaluateJavaScript(js, true);

// 찾기완료한 최신 라이브 영상의 주소입니다.
const fullLink = "https://www.youtube.com/"+link;

console.log(fullLink);

// 찾은 주소를 사파리에서 엽니다.(유튜브 앱이 설치되어있으면 자동으로 유튜브 앱으로 넘어갑니다.)
Safari.open(fullLink);
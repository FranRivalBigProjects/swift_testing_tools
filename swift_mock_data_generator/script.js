function run(){
let input=document.getElementById('input').value||"";
let output="";
let notes="";

// unit test
if(input.includes("class") || input.includes("func")){
  output += "func testExample() {\n    XCTAssertTrue(true)\n}\n\n";
  notes += "Unit test template generated.\n";
}

// mock data
if(input.includes("struct") || input.includes("class")){
  output += "// Mock data\nlet mock = Model(id: 1, name: \"Test\")\n";
  notes += "Mock data generated.\n";
}

// snapshot
if(input.includes("View") || input.includes("UI")){
  notes += "Snapshot testing scenario detected.\n";
}

if(!notes) notes="Basic test scaffold generated.";

document.getElementById('result').innerText =
"Output:\n"+output+"\nNotes:\n"+notes;
}

$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    let c = 0;
    let cplus = 0;
    let csharp = 0;
    let java = 0;
    let javascript = 0;
    let objectiveC = 0;
    let php = 0;
    let python = 0;
    let ruby = 0;
    const q1Input = parseInt($("input[name='q1']:checked").val());
    const q2Input = parseInt($("input[name='q2']:checked").val());
    const q3Input = parseInt($("input[name='q3']:checked").val());

    if (q1Input === 1) {
      cplus += 1;
      csharp += 3;
      java += 6;
      javascript += 2;
      objectiveC += 2;
      php += 1;
      python += 3;
      ruby += 1;
    } else if (q1Input === 2) {
      c += 1;
      cplus += 2;
      csharp += 1;
      java += 4;
      javascript += 1;
      objectiveC += 1;
      php += 1;
      python += 3;
      ruby += 1;
    } else if (q1Input === 3) {
      python += 1
    };

    if (q2Input === 1) { 
      cplus += 3;
      csharp += 1;
      java += 6;
      javascript += 1;
      objectiveC += 2;
      python += 2;
    } else if (q2Input === 2) {
      cplus += 1;
      csharp += 1;
      java += 3;
      javascript += 1;
      objectiveC += 1;
      php += 1;
      python += 1;
      ruby += 1;
    }

    if (q3Input === 1) {
      c += 
      cplus += 
      csharp += 
      java += 
      javascript += 
      objectiveC += 
      php += 
      python += 
      ruby += 
    }
  });
})
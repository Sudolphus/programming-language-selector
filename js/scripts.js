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

    if (q1Input === 1) {
      c += 3;
      csharp += 3;
      java += 3;
      javascript += 3;
      objectiveC += 3;
      python += 3;
    } else if (q1Input === 2) {
      c += 3;
      cplus += 3;
      csharp += 3;
      java += 3;
      javascript += 3;
      objectiveC += 3;
      php += 3;
      python += 3;
      ruby += 3;
    } else if (q1Input === 3) {
      python += 3;
    };

    if (q2Input === 1) {
      c += 2;
      cplus += 2;
      java += 2;
      javascript += 2;
      objectiveC += 2;
      php += 2;
      python += 2;
      ruby += 2;
    } else if (q2Input === 2) {
      cplus += 2;
      csharp += 2;
      java += 2;
      javascript += 2;
      objectiveC += 2;
      php += 2;
      python += 2;
      ruby += 2;
    }

    
  });
})
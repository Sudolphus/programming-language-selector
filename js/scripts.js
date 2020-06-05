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
    const q4Input = parseInt($("input[name='q4']:checked").val());
    const q5Input = parseInt($("input[name='q5']:checked").val());
    const q6Input = parseInt($("input[name='q6']:checked").val());
    const q7Input = parseInt($("input[name='q7']:checked").val());

    if (q1Input === 1) {
      cplus += 1;
      csharp += 3;
      java += 6;
      javascript += 2;
      objectiveC += 2;
      php += 1;
      python += 3;
      ruby += 1;
    } else if (q1Input === 2 || q1Input === 3 || q1Input === 4) {
      c += 1;
      cplus += 2;
      csharp += 1;
      java += 4;
      javascript += 1;
      objectiveC += 1;
      php += 1;
      python += 3;
      ruby += 1;
    } else if (q1Input === 5 || q1Input === 6) {
      python += 1
    }

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
      csharp += 1;
      objectiveC += 1;
      python += 2;
    } else if (q3Input === 2) {
      csharp += 1;
      javascript += 2;
      php += 1;
      python += 3;
      ruby += 1;
    } else if (q3Input === 3) {
      java += 1;
      objectiveC += 1;
    } else if (q3Input === 4) {
      csharp +=1;
      java +=2;
    } else if (q3Input === 5) {
      java +=1;
    }

    if (q4Input === 1) {
      csharp += 1;
    } else if (q4Input === 2) {
      objectiveC += 1;
    } else if (q4Input === 3 || q4Input === 4) {
      python += 1;
    }

    if (q5Input === 1) {
      javascript += 1;
    } else if (q5Input === 2) {
      csharp += 1;
      javascript += 1;
      php += 1;
      python += 3;
      ruby += 1;
    }

    if (q6Input === 1) {
      csharp += 1;
    } else if (q6Input === 2) {
      java += 1;
    }

    if (q7Input === 1) {
      objectiveC += 1;
    } else if (q7Input === 2) {
      java += 1;
    }

  });
})
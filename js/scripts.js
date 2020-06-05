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
    const q8Input = parseInt($("input[name='q8']:checked").val());
    const q9Input = parseInt($("input[name='q9']:checked").val());
    const q10Input = parseInt($("input[name='q10']:checked").val());
    const q11Input = parseInt($("input[name='q11']:checked").val());
    const q12Input = parseInt($("input[name='q12']:checked").val());
    
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
      cplus += 1;
    } else if (q3Input === 6) {
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

    if (q8Input === 1) {
      php += 1;
      python += 1;
      ruby += 1;
    } else if (q8Input === 2) {
      java += 1;
    }

    if (q9Input === 1) {
      python += 1;
    } else if (q9Input === 2) {
      java += 1;
    } else if (q9Input === 3) {
      cplus += 1;
    }

    if (q10Input === 1) {
      cplus += 1;
      csharp += 1;
      java += 3;
      javascript += 1;
      objectiveC += 1;
      php += 1;
      python += 1;
      ruby += 1;
    } else if (q10Input === 2) {
      c += 1;
      cplus += 1;
      java += 1;
      python += 2;
    }

    if (q11Input === 1) {
      java += 1;
    } else if (q11Input === 2) {
      c += 1;
    }

    if (q12Input === 1) {
      python += 1;
    } else if (q12Input === 2) {
      ruby += 1;
    } else if (q12Input === 3) {
      php += 1;
    }
    
    const winner = maximum(c, cplus, csharp, java, javascript, objectiveC, php, python, ruby)
    if (winner === c) {
      $("#c").show();
    } else if (winner === cplus) {
      $("#cplus").show();
    } else if (winner === csharp) {
      $("#csharp").show();
    } else if (winner === java) {
      $("#java").show();
    } else if (winner === javascript) {
      $("#javascript").show();
    } else if (winner === objectiveC) {
      $("#objectiveC").show();
    } else if (winner === php) {
      $("#php").show();
    } else if (winner === python) {
      $("#python").show();
    } else if (winner === ruby) {
      $("#ruby").show();
    }
  });
})

function maximum(a, b, c, d, e, f, g, h, i) {
  let x = a;
  if (b > x) {
    x = b;
  }
  if (c > x) {
    x = c;
  }
  if (d > x) {
    x = d;
  }
  if (e > x) {
    x = e;
  }
  if (f > x) {
    x = f;
  }
  if (g > x) {
    x = g;
  }
  if (h > x) {
    x = h;
  }
  if (i > x) {
    x = i;
  }
  return x;
}
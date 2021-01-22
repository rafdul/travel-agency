export const formatTime = time => {
  if(typeof time !== 'number'){
    return(null);
  } else if (time < 0) {
    return(null);
  } else {
    let ss = Math.floor(time%60);
    let mm = Math.floor(time/60%60);
    let hh = Math.floor(time/60/60);

    const arrayTime = [hh, mm, ss];
    const arrayTimeNew = [];
    for (let el of arrayTime) {
      if(el <= 9) {
        el = '0' + el;
        arrayTimeNew.push(el);
      } else {
        arrayTimeNew.push(el);
      }
    }

    const renderTime = arrayTimeNew[0] +':'+ arrayTimeNew[1] + ':' + arrayTimeNew[2];

    // if(ss <= 9) {
    //   ss = '0' + ss;
    // }
    // if(mm <= 9) {
    //   mm = '0' + mm;
    // }
    // if(hh <= 9) {
    //   hh = '0' + hh;
    // }

    // const renderTime = hh +':'+ mm + ':' + ss;

    return (renderTime);
  }
};

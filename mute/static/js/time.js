export function timeOut(day){
	var datTime = day * 24 * 60 * 60 * 1000;
		setInterval(function () {
  		datTime -= 1000;

  		var d = Math.floor(datTime / 1000 / 60 / 60 / 24 % 24);
  		d = d >= 10 ? d : '0' + d;

  		var hours = Math.floor(datTime / 1000 / 60 / 60 % 24);
  		hours = hours >= 10 ? hours : '0' + hours;

  		var minutes = Math.floor(datTime / 1000 / 60 % 60);
  		minutes = minutes >= 10 ? minutes : '0' + minutes;

  		var seconds = Math.floor(datTime / 1000 % 60);
  		seconds = seconds >= 10 ? seconds : '0' + seconds;
      // return d + '天' + hours + ':' + minutes + ":" + seconds;

      $('.timeLast').text(d + '天' + hours + ':' + minutes + ":" + seconds);
  	}, 1000);


}
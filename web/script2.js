$(document).ready(function() {
	$('.calc').on('click', function() {
		alert('계산되었습니다.');

		var menu1 = $('#rs1').val();
		var menu2 = $('#rs2').val();
		var menu3 = $('#rs3').val();
		var menu4 = $('#rs4').val();
		var menu5 = $('#rs5').val();
		var menu6 = $('#rs6').val();

		$('#result1').val(menu1 * 7800);
		$('#result2').val(menu2 * 2000);
		$('#result3').val(menu3 * 12000);
		$('#result4').val(menu4 * 8000);
		$('#result5').val(menu5 * 100000);
		$('#result6').val(menu6 * 95000);

		$('#sum').html(parseInt($('#result1').val()) +
			parseInt($('#result2').val()) +
			parseInt($('#result3').val()) +
			parseInt($('#result4').val()) +
			parseInt($('#result5').val()) +
			parseInt($('#result6').val()) + '원'
		);
	});
});

<script>
//入参数字，返回数字对应的汉字
function showgrandes(bgnum)
{
	var numStr ='零一二三四五六七八九十';
	if (bgnum <10)
	{
		var need = numStr.substr(bgnum,1);
		return need;
	}else if(bgnum == 10)
	{
		return '十';
	}
	else if(bgnum <20 && bgnum >10)
	{
		var newstrNum = String(bgnum).substr(1,1);
		var  newNum = parseInt(newstrNum);
		return '十'+numStr.substr(newNum,1);
	}else
	{
		
		var startstr = String(bgnum).substr(0,1);
		var endstr = String(bgnum).substr(1,1);
		var  sNum = parseInt(startstr);
		var  eNum = parseInt(endstr);
		if (eNum == 0)
		{
			return numStr.substr(sNum,1)+'十';
		}else
		{
			return numStr.substr(sNum,1)+'十'+numStr.substr(eNum,1);
		}
	};
}
</script>

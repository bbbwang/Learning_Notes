//开锁 提示
		function certifies(type){
			$.get("${ctx}/sys/parameter/updateParamter?type="+type,function(result){
				$('a[name="cardUnlock"]').attr('href','${ctx}/unlock/identify?sarkNum='+sarkToOpen);

				if(clickNum.length == 0){
					//$("#tipMessage").text("请先选择要打开的柜子");
					$("#tipMessage #scrollUp").append("<li>请先选择要打开的柜子！</li>");
					marquee();
				}else{
					$(".iframe").colorbox({iframe:true, width:"50%", height:"60%0",
						onCleanup:function(){
							$(".iframe").removeClass("cboxElement");
							$(".iframe").removeAttr("href");
						}
					});
					/* $('a[name="unlock"]').attr('href','${ctxStatic}/colorbox/content/openSark.jsp?val='+clickNum); */
					for(var i=0; i<clickNum.length; i++){
						sarkToOpen += clickNum[i]+",";
					}

					sarkToOpen = sarkToOpen.substr(0,sarkToOpen.length-1);

					$('a[name="cardUnlock"]').attr('href','${ctx}/unlock/identify?sarkNum='+sarkToOpen);
				}


			});

		}
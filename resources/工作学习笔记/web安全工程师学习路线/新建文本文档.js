//���� ��ʾ
		function certifies(type){
			$.get("${ctx}/sys/parameter/updateParamter?type="+type,function(result){
				$('a[name="cardUnlock"]').attr('href','${ctx}/unlock/identify?sarkNum='+sarkToOpen);

				if(clickNum.length == 0){
					//$("#tipMessage").text("����ѡ��Ҫ�򿪵Ĺ���");
					$("#tipMessage #scrollUp").append("<li>����ѡ��Ҫ�򿪵Ĺ��ӣ�</li>");
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
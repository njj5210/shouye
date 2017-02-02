$(function(){
   $('textarea')
       .typetype('认真工作是一种好的生活习惯\n               享受工作，享受生活,才是美好的人生！')
       .delay(200)
       // .typetype('\n                 享受工作，享受生活。')

   $('video').attr({width:$(this).width(),height:$(window).height()});
   $('.intro').css('height',$(window).height());
   $(window).resize(function(){
      $('video').attr({width:$(this).width(),height:$(this).height()});
      $('.intro').css('height',$(window).height());
      //$('video').height($(this).height()+'px');
   })

   $('.caidan').click(function(){
      $('.nav-header').fadeToggle('slow');
   })
   //榧犳爣缁忚繃杞挱鍥剧殑鏃跺€欐樉绀哄乏鍙充袱杈圭殑鎺т欢
   $('.lunbo-one').hover(function(){
      $('.lunbo-right').css('opacity','0.8');
      $('.lunbo-left').css('opacity','0.8');
   },function(){
      $('.lunbo-right').css('opacity','');
      $('.lunbo-left').css('opacity','');     
   })
   //榧犳爣鐐瑰嚮杞挱鍥惧乏鍙虫帶浠剁殑鏃跺€欒繘琛屽垏鎹�
   var lunw = 0;
   var pl = 0;
   var pr = 0;
   var ull = 0;
   pl = parseInt($('.lunbo-one').css('padding-left'));
   pr = parseInt($('.lunbo-one').css('padding-right'));
   bianr = (parseInt(-$('.lunbo-lun').width()))/2;
   $('.lunbo-right').click(function(){
      ull =  parseInt($('.lunbo-lun').css('left'));
      console.log(bianr)
      if(ull<=bianr){         
         $('.lunbo-lun').stop().animate({left:bianr-pr-30+'px'},500,function(){
            $('.lunbo-lun').animate({left:bianr-pr+'px'},500);
         });
         return;
      }
      lunw += -($('.lunbo-one').width()+pr);
      $('.lunbo-lun').stop().animate({left:lunw+'px'},1000);
   })
   $('.lunbo-left').click(function(){
      ull =  parseInt($('.lunbo-lun').css('left'));
      if(ull>=0){         
         $('.lunbo-lun').stop().animate({left:'30px'},500,function(){
            $('.lunbo-lun').animate({left:'0'},500);
         });
         return;
      }
      lunw += $('.lunbo-one').width()+pl;
      $('.lunbo-lun').stop().animate({left:lunw+'px'},1000)
   })
   //婊氬姩鏉＄洃鍚簨浠�
   //宸ヤ綔缁忛獙婊氬姩鏉¤窛绂�
   var wh = $(window).height()/2;
   var skillt = $('.aa').eq(1).offset().top;
   var lunt = $('.aa').eq(2).offset().top;
   var projectt = $('.aa').eq(3).offset().top;
   $(window).scroll(function(){
      var wt = $(this).scrollTop();
      $('.nav-scroll>li').siblings().removeClass('active');
      if(wt<=skillt){
         $('.nav-scroll>li').eq(0).addClass('active');
         $('.nav-header').css('display','');         
      }
      if(wt>skillt&&wt<lunt){
         $('.nav-scroll>li').eq(1).addClass('active'); 
         $('.nav-header').css('display','block');          
      }
      if(wt>=lunt&&wt<projectt){
         $('.nav-scroll>li').eq(2).addClass('active');        
      }
      if(wt>=projectt){
         $('.nav-scroll>li').eq(3).addClass('active'); 
         $('.nav-header').css('display','block');  
      } 
   })
   $('.nav-scroll>li').each(function(i){
      $(this).click(function(){
         var at = $('.aa').eq(i).offset().top;
         var int = setInterval(function(){
            var to = $(window).scrollTop();  
            var a = to>at?-3:3;
            to+=a;
            if(to>=at&&to<=at+2){
               clearInterval(int);
            }
            $(window).scrollTop(to);
         },1);
      })
   })
   hljs.configure({languages:['js']})
   hljs.highlightBlock($('#code')[0])
   $('#usage').click(function(){
      this.focus()
      this.select()
   })

})



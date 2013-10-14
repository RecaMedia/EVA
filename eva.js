var eva = function(){
	this.init = function(timing,delay){
		var j = jQuery.noConflict();
		
		var animationType;
		var animationTiming = timing;
		var animationDelay = delay;
		var objs = [];
		var objsStart = [];
		var xCor = [];
		var yCor = [];
		var width = [];
		var height = [];
		var count;
		var a = 0;
		var delay = 0;
		
		this.add = function(ele,type){
			animationType = type;
			j('.'+ele).each(function(){
				var WH_name = ele+''+a;
				var position = j(this).position();
				
				objs.push(WH_name);
				objsStart.push(true);
				xCor.push(position.top);
				yCor.push(position.left);
				width.push(j(this).width());
				height.push(j(this).height());
				
				j(this).addClass(WH_name);
				j(this).css('display','none');
				
				a++;
			});
			count = objs.length;
			checkIfVisible();
		}
		
		SP = Number(j(document).scrollTop())+Number(j(window).height());
		
		var checkIfVisible = function(){
			for(i=0;i<count;i++){
				if(SP >= xCor[i] && objsStart[i]){
					objsStart[i] = false;
					animType(i,delay);
					console.log(objs[i]+'.'+delay);
					delay += animationDelay;
				}
			}
			setTimeout(function(){delay = 0},100);
		}
		
		var anim_Fade = function(e){
			j('.'+objs[e]).fadeIn(animationTiming);
		}
		
		var anim_Jump = function(e){
			j('.'+objs[e]).css({
				top:Number(height[e])+'px',
				opacity:'0',
				position:'relative'
			}).show();
			j('.'+objs[e]).animate({
				top:'0px',
				opacity:'1',
				position:''
			},animationTiming,"easeOutBounce");
		}
		
		var anim_Zoom = function(e){
			j('.'+objs[e]).css({
				top:(Number(height[e])/2)+'px',
				left:(Number(width[e])/2)+'px',
				width:'1px',
				height:'1px',
				opacity:'0',
				position:'relative'
			}).show();
			
			j('.'+objs[e]).animate({
				top:'0px',
				left:'0px',
				width:width[e]+'px',
				height:height[e]+'px',
				opacity:'1',
				position:''
			},animationTiming,"easeOutCubic");
		}
		
		var anim_ZoomSpin = function(e){
			j('.'+objs[e]).css({
				top:(Number(height[e])/2)+'px',
				left:(Number(width[e])/2)+'px',
				width:'1px',
				height:'1px',
				opacity:'0',
				position:'relative'
			}).show();
			
			j('.'+objs[e]).animate({
				top:'0px',
				left:'0px',
				width:width[e]+'px',
				height:height[e]+'px',
				opacity:'1',
				deg:360,
				position:''
			},{
				step:function(now){
					j(this).css('-webkit-transform','rotate('+now+'deg)');
					j(this).css('-moz-transform','rotate('+now+'deg)'); 
					j(this).css('-ms-transform','rotate('+now+'deg)');
					j(this).css('-o-transform','rotate('+now+'deg)');
					j(this).css('transform','rotate('+now+'deg)');  
				},
				duration:animationTiming
			},"easeOutCubic");
		}
		
		var animType = function(e,d){
			switch(animationType){
				case 'fade':
					setTimeout(function(){anim_Fade(e)},d);
				break;
				case 'jump':
					setTimeout(function(){anim_Jump(e)},d);
				break;
				case 'zoom':
					setTimeout(function(){anim_Zoom(e)},d);
				break;
				case 'zoomspin':
					setTimeout(function(){anim_ZoomSpin(e)},d);
				break;
			}
		}
		
		j(window).scroll(function(){
			SP = Number(j(document).scrollTop())+Number(j(window).height());
			checkIfVisible();
		});
	}
};
(function(){window.gen_complete=true;window.require(["pubsub"],function(q){q.subscribe("end.processing",function(){console.log("Finished");window.gen_complete=true})});var l=["Austin, TX","Eiffel Tower, Paris, France","Denver, CO","Vancouver, BC","San Francisco, CA","Rome","Seattle, WA","Osaka-jo, Osaka, Japan","Reflecting Pool, Washington DC","Amsterdam","Portland, OR","Shanghai, China","Orland Park, Chicago, IL","Melbourne, Australia","Cairo, Egypt"],m=[5,10,20],k=$("#location_search_text"),j=$("#route_length"),i=$("#auto_route_button"),n=l.length,b=m.length,g=0,e=0,f=11,a,o=1,d=$("<span>").text("0").css("font-size","120%"),c=function(){if(!window.gen_complete){return}d.text(--o);if(o>0){return}k.val(l[g]).trigger("change");j.val(m[Math.floor(Math.random()*b)]);window.gen_complete=false;i.click();console.log("Started",l[g]);g=g<n-1?g+1:0;o=f},h=function(){window.clearInterval(a)};$("#left").find(".inner").append($("<p>").css({"text-align":"center",clear:"both","margin-top":"2rem","font-weight":"bold",border:"1px solid #666",padding:"0.5rem","border-width":"1px 0","background-color":"#ddd"}).append("Generating new route in ",d," seconds."));$("label[for=route_length]").text("Length (approx.):");a=window.setInterval(c,1000);window.undemo=h}());
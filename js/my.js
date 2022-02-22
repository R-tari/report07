
        let secCon=document.querySelector('.sec-slide .container');
       

        let Nav=document.querySelectorAll('.nav ul li');

        let subNav=document.querySelector('.sub-nav');

        for(let i=0;i<Nav.length;i++)
        {
            Nav[i].addEventListener('mouseenter',function()
            {
                subNav.style.bottom='705px';    
            })
        }

        subNav.addEventListener('mouseleave',function()
        {
            subNav.style.bottom='900px';
        })
        
        function slide()
        {
            
        
            setInterval(() =>
            {
                secCon.style.transform='translate(-1200px)';
                
            }, 2000);

            setInterval(() =>
            {
                secCon.style.transform='translate(-2400px)';
                
            }, 4000);

            setInterval(() =>
            {
                secCon.style.transform='translate(-3600px)';
                
            }, 6000);

            
        }

        slide();
        
        let btn=document.querySelector('.in button');
        console.log(btn);
        let popDis=document.querySelector('.dis-none');

        btn.addEventListener('click',function()
        {
            popDis.style.display='none';
        })

        
        let noticeLink=document.querySelectorAll('.notice-tit a');
        console.log(noticeLink);

        for(let i=0;i<noticeLink.length;i++)
        {
            noticeLink[i].addEventListener('click',function()
        {
            popDis.style.display='block';
        })

        }
       


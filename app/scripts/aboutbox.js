(function () {

    var thePeople = [
        '\u0041\u006E\u0064\u0072\u0065\u006A\u0020\u0044\u0072\u0061\u0067\u0069\u0161\u0069\u0107',
        '\u0041\u0064\u0072\u0069\u00E0\u0020\u004D\u0061\u0073\u0073\u0061\u006E\u0065\u0074',
        '\u0050\u0069\u006C\u0061\u0072\u0020\u0042\u0065\u0072\u006D\u00FA\u0064\u0065\u007A',
        '\u00C1\u006C\u0076\u0061\u0072\u006F\u0020\u0050\u0069\u006E\u0061\u0063\u0068\u006F',
        '\u00DA\u006C\u0066\u0075\u0072\u0020\u004B\u0072\u0069\u0073\u0074\u006A\u00E1\u006E\u0073\u0073\u006F\u006E',
        '\u0054\u006F\u006E\u0069\u0020\u0046\u0072\u0061\u006E\u006B\u0066\u0075\u0072\u0074\u0065\u0072',
        'Luciana Abbruzzese',
        'Sergi Bafa',
        'Victor Santacreu',
        'Duncan Campbell',
        'Marcos Horna',
        'Juan Della Torre',
        'Eduardo Forte',
        'Fabienne Plangger',
        'Yonah Forst',
        'Adolf Rodriguez Guillen',
        'Chris Kelley',
        'Fran Rojo',
        'Bernard Schembri',
        'Ver Di',
        'Regina Rodriguez Sirvent',
        'Eva Panda',
        'Juan Criollo',
        'Tim Plaggenborg',
        'Nadine Scholz',
        'Damiano Vita',
        'Kristian Dupont Knudsen',
        'Maneki Neko',
        'Leif Gensert',
        'Toni Frankfurter',
        'Rouli Diamantopoulou',
        'Alessandra Fardin',
        'Marianne Noble',
        'Rut Sagrera',
        'Nils Mattisson'];
    
    var colors  = [
        { pure: '#49c4c1', line: '#69e4e1' }  ,
        { pure: '#9a92d2', line: '#bab2f2' } ,
        { pure: '#93cc3a', line: '#b3ec6a' } ];
    
    var backcolorIndex ;
    var ticks;
    var logoImage;
    var particles = [];
    var wasInitialized = false;
    
    var mouse = { x: 0, y: 0 };
    
    var canvas = document.getElementById('about-canvas');
    
    if (canvas && canvas.getContext) {
        var context = canvas.getContext('2d');
    
        $("#about-button a").click(function () { if(!wasInitialized) Initialize(); wasInitialized = true; });
    }
    
    function Initialize() {
        backcolorIndex = Math.floor((Math.random()*colors.length));
    
        for( var i = 0; i < 15; i++ ) {
    
            particles.push( {
                x:Math.random()*window.innerWidth,
                y:Math.random()*window.innerHeight,
                vx:(Math.random()*2)-1,
                vy:(Math.random()*2-1),
                size: 4+Math.random()*6
            } );
        }
    
        logoImage = new Image();
        logoImage.src = 'fromtotransparency-white.png';
    
        for (i = 0 ; i < thePeople.length ; ++i)
        {
            var swapindex =  Math.floor(Math.random()*thePeople.length);
            var aux = thePeople[i];
            thePeople[i] = thePeople[swapindex];
            thePeople[swapindex] = aux;
        }
        ticks=0;
        setInterval( TimeUpdate, 20 );
        context.beginPath();
    }
    
    function TimeUpdate(e)
    {
        context.fillStyle=colors[backcolorIndex].pure;
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        ticks++;
    
        var v = 0.99;
    
        for( var i = 0; i < particles.length; i++ )
        {
            particles[i].x += particles[i].vx;
            particles[i].y += particles[i].vy;
    
            if( particles[i].x > canvas.width ) {
                particles[i].vx = -v-Math.random();
            }
            else if ( particles[i].x < 0 ) {
                particles[i].vx = v+Math.random();
            }
            else {
                particles[i].vx *= v + (Math.random()*0.005);
            }
    
            if( particles[i].y > canvas.height ) {
                particles[i].vy = -v-Math.random();
            }
            else if ( particles[i].y < 0 ) {
                particles[i].vy = v+Math.random();
            }
            else {
                particles[i].vy *= v + (Math.random()*0.005);
            }
    
            context.strokeStyle = colors[backcolorIndex].line;
            context.beginPath();
            for( var j = 0; j < particles.length; j++ )
            {
                if (i!=j && (j+i)%7==0)
                {
                    context.lineTo( particles[j].x, particles[j].y );
                }
            }
            context.stroke();
    
        }
    
        for( var i = 0; i < particles.length; i++ )
        {
            var distanceFactor = DistanceBetween( particles[particles.length-i-1], particles[i] );
            distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
            var size = particles[i].size*distanceFactor;
    
            var maxSize = 15;
    
            if (size > maxSize ) size=maxSize;
    
            context.fillStyle = '#fff';
            context.beginPath();
            context.arc(particles[i].x,particles[i].y,size,0,Math.PI*2,true);
            context.closePath();
            context.fill();
        }
    
        if (ticks < 200 )
        {
            var updowncrop = 200-ticks;
            context.fillStyle='#fff';
            context.fillRect(0, updowncrop, canvas.width, updowncrop);
            context.fillStyle=colors[backcolorIndex].line;
            context.fillRect(0, updowncrop+10, canvas.width, updowncrop-10);
            context.drawImage(logoImage,logoImage.height,logoImage.width);
            context.drawImage(logoImage, ticks-100 ,30);
    
            context.textAlign = 'center';
            context.fillStyle = '#fff';
            context.font = 'bold 13px Arial';
            context.fillText('THE 36 HOURS #1 BETAHAUS BCN HACKATON', canvas.width/2, canvas.height-20);
            context.textAlign = 'center';
        } else
        {
            context.drawImage(logoImage, 200-100 ,30);
    
            context.textAlign = 'center';
            context.fillStyle = '#fff';
            context.font = 'bold 13px Arial';
            var index = Math.floor((ticks / 60) % thePeople.length);
            context.fillText('THE CREW', canvas.width/2, canvas.height-25);
            context.fillText(thePeople[index], canvas.width/2, canvas.height-10);
            context.textAlign = 'center';
        }
    
    }
    
    function DistanceBetween(p1,p2) {
        var dx = p2.x-p1.x;
        var dy = p2.y-p1.y;
        return Math.sqrt(dx*dx + dy*dy);
    }

})();

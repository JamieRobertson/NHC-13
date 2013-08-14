/* JavaScript document for NHC-13 

save map image in local Storage
thoroughly test iScroll plugin
look at mobile tutsplus for help
Run testing ground style black box for all markers percentages

*/

/*
var soundsystemsData = [
    ['4Play', 51.526301, -0.214019, 'house, garage, R&B, hip hop, <br />bashment, reggae'],
    ['Aba-shan-ti', 51.524592, -0.210865, 'roots, reggae, dub'],
    ['Arts A Light', 51.521492, -0.21051, 'R&B, reggae, <br />hip hop, classic garage'],
    ['Blackstar Showtime', 51.524312, -0.209223, 'reggae, ragga, soul'],
    ['Channel One', 51.518144, -0.200543, 'roots & culture'],
    ['CMC Matrix', 51.51825, -0.203977, 'drum & bass'],
    ['Different Strokes', 51.518517, -0.20211, 'anything goes, house-party style'],
    ['Disco Hustlers', 51.516087, -0.20153, 'house music through the ages'],
    ['Disya Generation', 51.517195, -0.20138, 'R&B, hip hop, bashment, soca'],
    ['Gaz\'s Rockin\' Blues', 51.516635, -0.199964, 'classic ska, revival, <br />New Orlean\'s R&B'],
    ['GI Roadshow', 51.526288, -0.212345, 'reggae, bashment, salsa, R&B'],
    ['Gladdy Wax\'s Roadshow', 51.520867, -0.20932, 'roots & culture, reggae & ska'],
    ['GT Flex Roadshow', 51.524085, -0.206122, 'R&B, ragga, soul, <br />old school, revival'],
    ['High Grade', 51.519172, -0.209899, 'reggae & roots'],
    ['Jah Observer', 51.516862, -0.199835, 'roots & culture'],
    ['Killawatt', 51.519078, -0.20256, 'reggae, ragga, dancehall'],
    ['King Tubbys', 51.517276, -0.20329, 'reggae, dancehall, bashment, R&B'],
    ['Latin Rave Street Jam', 51.521268, -0.209749, 'latin & salsa'],
    ['Lord Gelly\'s', 51.51829, -0.210478, 'reggae, R&B, soca & beyond'],
    ['Mangrove Sound', 51.517876, -0.203912, 'soca & reggae'],
    ['Mastermind Roadshow', 'upfront R&B, hip hop, <br />soul, old school, reggae'],
    ['Mellowtone', 51.522269, -0.211658, 'soul, ragga, R&B, revival'],
    ['Metro Glory', 51.517957,-0.200737, 'house to roots'],
    ['Nasty Love Mixing Lab', 51.516247,-0.202689, 'reggae, ragga, hip hop, R&B'],
    ['People\'s Sound', 51.517997, -0.203419, 'old & new reggae'],
    ['Pineapple Tribe', 51.515353, -0.199385, 'techno & breaks'],
    ['Rapattack', 51.518958, -0.204556, 'old school soul, <br />rare groove, UKG, funky'],
    ['Rough But Sweet', 51.524873, -0.206723, 'reggae, dub, calypso, garage'],
    ['Sancho Panza', 51.52566, -0.211744, 'funky house, disco, techno'],
    ['Saxon Studio', 51.521348, -0.211122, 'ragga & reggae'],
    ['Sir Lloyd', 51.519973, -0.20211, 'R&B & reggae'],
    ['Sir Valdez', 51.523498, -0.206766, 'R&B, hip hop, ragga'],
    ['SSP Sound System', 51.526021, -0.209255, 'funky & soulful house, UKG, classics'],
    ['The Fun Bunch', 51.517209, -0.197453, 'R&B, hip hop, garage, boogie'],
    ['Virgo International', 51.518918, -0.211036, 'reggae, soca, <br />hip hop, R&B, garage']
];
*/


window.onerror = function(message, url, lineNumber) {
        console.log("Error: "+message+" in "+url+" at line "+lineNumber);
    }

var currentPage;
/* take lat and long away later */
var long = null;
var lat = null;
/* end */

var longLeft = null;
var latTop = null;

var app = {
    // Application Constructor
    initialize: function() {

        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);

        var watchID = null;
        var latitude = null;
        var longitude = null;
        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });

        function onSuccess(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            /*
            18.009682 = 0% x ;
            18.031011 = 100% x ;
            0.021329 = 18.031011 - 18.009682 ;
            */

            longLeft = ( (-0.218618 - long) / -0.031114 ) * 100;
            latTop = ( (51.527756 - lat) / 0.019361 ) * 100;


            
        }

        function onError(error) {
            // change this to display a error sub-header ?
            console.log('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	
    	var Data = {
			"Four-Play" : {
				"Title" : "4Play",
				"Content" : "House, garage, R&B, hip hop, bashment, reggae",
                "Left" : 14.781127466735294,
                "Top" : 7.515107690718373
			},
			"Aba-shan-ti" : {
				"Title" : "Aba-shan-ti",
				"Content" : "Roots, reggae, dub",
                "Left" : 24.918043324548467,
                "Top" : 16.34213108826077
			},
			"Arts-A-Light" : {
				"Title" : "Arts A Light",
				"Content" : "R&B, reggae, hip hop, classic garage",
                "Left" : 26.05900880632514,
                "Top" : 32.353700738569785
			},
			"Blackstar-Showtime" : {
				"Title" : "Blackstar Showtime",
				"Content" : "Reggae, ragga, soul",
                "Left" : 30.195410426174757,
                "Top" : 17.788337379240087
			},
			"Channel-One" : {
				"Title" : "Channel One",
				"Content" : "Roots & culture",
                "Left" : 58.09281995243302,
                "Top" : 49.646195960937284
			},
			"CMC-Matrix" : {
				"Title" : "CMC Matrix",
				"Content" : "Drum & bass",
                "Left" : 47.05598765828892,
                "Top" : 49.09870357933312
			},
			"Different-Strokes" : {
				"Title" : "Different Strokes",
				"Content" : "Anything goes, house-party style",
                "Left" : 53.05650189625247,
                "Top" : 47.719642580413094
			},
			"Disco-Hustlers" : {
				"Title" : "Disco Hustlers",
				"Content" : "House music through the ages",
                "Left" : 54.920614514366584,
                "Top" : 60.270647177303395
			},
			"Disya-Generation" : {
				"Title" : "Disya Generation",
				"Content" : "R&B, hip hop, bashment, soca",
                "Left" : 55.402712605258095,
                "Top" : 54.54780228291721
			},
            "Gazs-Rockin-Blues" : {
                "Title" : "Gaz's Rockin' Blues",
                "Content" : "Classic ska, revival, New Orlean's R&B",
                "Left" : 59.95371858327443,
                "Top" : 57.44021486491254
            },
            "GI-Roadshow" : {
                "Title" : "GI Roadshow",
                "Content" : "Reggae, bashment, salsa, R&B",
                "Left" : 20.161342161085045,
                "Top" : 7.582252982777667
            },
            "Gladdy-Waxs-Roadshow" : {
                "Title" : "Gladdy Wax's Roadshow",
                "Content" : "Roots & culture, reggae & ska",
                "Left" : 29.883653660731508,
                "Top" : 35.581839780971684
            },
            "GT-Flex-Roadshow" : {
                "Title" : "GT Flex Roadshow",
                "Content" : "R&B, ragga, soul, old school, revival",
                "Left" : 40.161984958539584,
                "Top" : 18.960797479454023
            },
            "High-Grade" : {
                "Title" : "High Grade",
                "Content" : "Reggae & roots",
                "Left" : 28.022755029890096,
                "Top" : 44.336552863999984
            },
            "Jah-Observer" : {
                "Title" : "Jah Observer",
                "Content" : "Roots & culture",
                "Left" : 60.368322941441136,
                "Top" : 56.26775476469861
            },
            "Killawatt" : {
                "Title" : "Killawatt",
                "Content" : "Reggae, ragga, dancehall",
                "Left" : 51.610207623577864,
                "Top" : 44.82206497596296
            },
            "King-Tubbys" : {
                "Title" : "King Tubbys",
                "Content" : "Reggae, dancehall, bashment, R&B",
                "Left" : 49.263996914572246,
                "Top" : 54.12943546301353
            },
            "Latin-Rave-Street-Jam" : {
                "Title" : "Latin Rave Street Jam",
                "Content" : "Latin & salsa",
                "Left" : 28.504853120781693,
                "Top" : 33.5106657713826
            },
            "Lord-Gellys" : {
                "Title" : "Lord Gelly's",
                "Content" : "Reggae, R&B, soca & beyond",
                "Left" : 26.161856399048688,
                "Top" : 48.89210268062703
            },
            "Mangrove-Sound" : {
                "Title" : "Mangrove Sound",
                "Content" : "Soca & reggae",
                "Left" : 47.26489683100854,
                "Top" : 51.03042198231211
            },
            /* dont have data for mastermind roadshow */
            /*
            "Mastermind-Roadshow" : {
                "Title" : "Mastermind Roadshow",
                "Content" : "Upfront R&B, hip hop, <br />soul, old school, reggae",
                "Left" : "",
                "Top" : ""
            },
            */
            "Mellowtone" : {
                "Title" : "Mellowtone",
                "Content" : "Soul, ragga, R&B, revival",
                "Left" : 22.369351417368367,
                "Top" : 28.340478281055393
            },
            "Metro-Glory" : {
                "Title" : "Metro Glory",
                "Content" : "House to roots",
                "Left" : 57.4693064215466,
                "Top" : 50.61205516240843
            },
            "Nasty-Love-Mixing-Lab" : {
                "Title" : "Nasty Love Mixing Lab",
                "Content" : "Reggae, ragga, hip hop, R&B",
                "Left" : 51.19560326541107,
                "Top" : 59.44424358244233
            },
            "Peoples-Sound" : {
                "Title" : "People's Sound",
                "Content" : "Old & new reggae",
                "Left" : 48.84939255640553,
                "Top" : 50.405454263702346
            },
            "Pineapple-Tribe" : {
                "Title" : "Pineapple Tribe",
                "Content" : "Techno & breaks",
                "Left" : 61.81461721411583,
                "Top" : 64.06177366871057
            },
            "Rapattack" : {
                "Title" : "Rapattack",
                "Content" : "Old school soul, rare groove, UKG, funky",
                "Left" : 45.195089027447516,
                "Top" : 45.44186767211792
            },
            "Rough-But-Sweet" : {
                "Title" : "Rough But Sweet",
                "Content" : "Reggae, dub, calypso, garage",
                "Left" : 38.230378607700764,
                "Top" : 14.890759774789949
            },
            "Sancho-Panza" : {
                "Title" : "Sancho Panza",
                "Content" : "Funky house, disco, techno",
                "Left" : 22.092948511923954,
                "Top" : 10.825887092580686
            },
            "Saxon-Studio" : {
                "Title" : "Saxon Studio",
                "Content" : "Ragga & reggae",
                "Left" : 24.09204859548757,
                "Top" : 33.09746397393372
            },
            "Sir-Lloyd" : {
                "Title" : "Sir Lloyd",
                "Content" : "R&B & reggae",
                "Left" : 53.05650189625247,
                "Top" : 40.19936986723992
            },
            "Sir-Valdez" : {
                "Title" : "Sir Valdez",
                "Content" : "R&B, hip hop, ragga",
                "Left" : 38.09217715497847,
                "Top" : 21.992665668096148
            },
            "SSP-Sound-System" : {
                "Title" : "SSP Sound System",
                "Content" : "Funky & soulful house, UKG, classics",
                "Left" : 30.092562833451215,
                "Top" : 8.961313981697689
            },
            "The-Fun-Bunch" : {
                "Title" : "The Fun Bunch",
                "Content" : "R&B, hip hop, garage, boogie",
                "Left" : 68.02404062479918,
                "Top" : 54.47549196836642
            },
            "Virgo-International" : {
                "Title" : "Virgo International",
                "Content" : "Reggae, soca, hip hop, R&B, garage",
                "Left" : 24.36845150093207,
                "Top" : 45.648468570824015
            },
            "Westbourne-Park" : {
                "Title" : "Westbourne Park",
                "Content" : "<i>Exit only from 11:00-18:00 <br />station closes at 23:30</i>",
                "Left" : 56.56296201067045,
                "Top" : 34.26992407414765
            },
            "Ladbroke-Grove" : {
                "Title" : "Ladbroke Grove",
                "Content" : "<i>Station closed</i>",
                "Left" : 26.62145657903199,
                "Top" : 53.235886576093186
            },
            "Royal-Oak" : {
                "Title" : "Royal Oak",
                "Content" : "<i>Travel information <br />not yet available</i>",
                "Left" : 97.65700327826701,
                "Top" : 43.16409276378605
            },
            "Bayswater" : {
                "Title" : "Bayswater",
                "Content" : "<i>Travel information <br />not yet available</i>",
                "Left" : 98.6211994600502,
                "Top" : 79.72212179121189
            },
            "NH-gate" : {
                "Title" : "Notting Hill Gate",
                "Content" : "<i>12:00-19:00 exit only <br />no circle & district line access</i>",
                "Left" : 72.49469692100025,
                "Top" : 96.06941790196417
            }
		};

    	Zepto(function($){

    		var $headerTitle = $("#headerTitle"),
                $sidebarBtn = $("#sidebarBtn"),
                $nav_li_a = $("nav li a"), 
    			$dropDownBtn = $("#dropDownBtn"),
    			$soundsystemMenu = $("#soundsystemMenu"),
    			$soundsystemMenu_a = $soundsystemMenu.find("a"),
    			$youAreHere = $("#youAreHere"),
    			$soundSystemMarkers = $("#soundSystemMarkers"),
                $routeMarkers = $("#routeMarkers"),
                $firstAidMarkers = $("#firstAidMarkers"),
                $toiletMarkers = $("#toiletMarkers"),
    			//$marker = $(".marker"),
                $marker = $soundSystemMarkers.find("a").add("#stationMarkers a"),
    			$popoverBlock = $("#popoverBlock"),
                $closeBtn = $popoverBlock.find("#closeBtn"),
    			$popoverTitle = $popoverBlock.find("#popoverTitle"),
    			$popoverContent = $popoverBlock.find("#popoverContent"),
                $map = $("#map");

            $headerTitle.html("soundsystems");
            $dropDownBtn.show();
            $soundSystemMarkers.show();
            /*
            currentPage = "soundsystemsPage";
            switch ( currentPage ) {
                case "soundsystemsPage" :
                    $headerTitle.html("soundsystems");
                    $dropDownBtn.show();
                    $soundSystemMarkers.show();
                    break;
                case "routePage" :
                    $headerTitle.html("the route");
                    $dropDownBtn.hide();
                    break;
                case "firstaidPage" :
                    $headerTitle.html("first aid");
                    $dropDownBtn.hide();
                    break;
                case "toiletsPage" :
                    $headerTitle.html("toilets");
                    $dropDownBtn.hide();
                    break;
                default :
                    $headerTitle.html("Notting Hill 2013");
            }
            */
            


            var myScroll;
            myScroll = new iScroll('scroll', { hScroll: false, vScrollbar: false });
            setTimeout(function () {
                myScroll.refresh();
            }, 0);

            /*
            var myZoom;
            myZoom = new iScroll('map', { zoom: true, lockDirection: false, bounce: false, hScrollbar: false, vScrollbar: false });
            setTimeout(function() {
                myZoom.refresh();
            }, 0);
            */

            function positionScrollbars() {
                /*
                var xA = longLeft < 33, xB = longLeft > 33 && < 66, xC = longLeft > 66,
                    yA = latTop < 33, yB = latTop > 33 && < 66, yC = latTop > 66;
                */

                // is a 9 grid really neccessary when you are zoomed out?
                // maybe use a 4 grid and do nothing (return false) for top-left

                if ( longLeft < 33 && latTop < 33 ) {
                    console.log("top left");
                }
                else if ( ( 33 < longLeft < 66 ) && latTop < 33 ) {
                    console.log("top center");
                }
                else if ( longLeft > 66 && latTop < 33 ) {
                    console.log("top right");
                }
                else {
                    console.log("go to center if default");
                }
                
            }

            if ( longLeft !== null && latTop !== null) {
                $youAreHere.css("left", longLeft +"%").css("top", latTop +"%");
                $youAreHere.show();
                positionScrollbars();
            } else {
                //display info bar or icon
            }

            /*
    		if ( longLeft < 100 && latBottom < 100 ) {
                $youAreHere.css("left", longLeft +"%").css("bottom", latBottom +"%");
                $youAreHere.show();
            }
            else {
                console.log("one value > 100%");
            }
            */
            /*
            var element = document.getElementById('geolocation');
            
            
            element.innerHTML = 'Latitude: '  + lat     + '<br />' +
                                'Longitude: ' + long    + '<br />' +
                                '<hr />'      + element.innerHTML;
            */

            //$("#geolocation").html("<br /><br /><br /><br />"+lat +" , "+ long).append("<br />"+ latTop +" , "+longLeft);

    		$dropDownBtn.on('tap', function() {
                $soundsystemMenu.toggleClass('enabled');
    			/*if ( $soundsystemMenu.css('display') == 'none' ) {
                    myScroll.destroy();
    				$soundsystemMenu.show();
    			} else {
					$soundsystemMenu.hide();
    			}*/
    			return false;
    		});


    		function infoBubble(dataName) {
    			// populate fields , position and show info bubble
    			var title = Data[dataName].Title;
    			var content = Data[dataName].Content;
                var left = Data[dataName].Left;
                var top = Data[dataName].Top;

    			$popoverTitle.html(title);
    			$popoverContent.html(content);
                if ( left < 22 || top < 22 && left < 50 ) {
                    $popoverBlock.removeClass("arrowRight arrowBottom").addClass("arrowLeft").css("left", left +"%").css("top", top +"%").show();
                } else if ( left > 75 || top < 22 && left > 50 ) {
                    $popoverBlock.removeClass("arrowLeft arrowBottom").addClass("arrowRight").css("left", left +"%").css("top", top +"%").show();
                } else {
    		        $popoverBlock.removeClass("arrowLeft arrowRight").addClass("arrowBottom").css("left", left +"%").css("top", top +"%").show();
                }
    		};
    		
    		$marker.on('tap', function() {
    			var dataName = $(this).attr("data-name");
    			infoBubble(dataName);
    			return false;
    		});

    		$soundsystemMenu_a.on('tap', function() {
    			var dataName = $(this).attr("data-name");
    			$soundsystemMenu.toggleClass('enabled');
    			infoBubble(dataName);
    			return false;
    		});

            $closeBtn.add($map).on('tap', function() {
                $popoverBlock.hide();
                return false;
            });


            function toggleSidebar() {
                $('body').toggleClass('active');
                return false;
            }

            $sidebarBtn.on('tap', function() {
                toggleSidebar();
                return false;
            });

            $nav_li_a.on('tap', function() {
                //$(this).addClass('current');
                var href = $(this).attr('href');
                switch ( href ) {
                    case "#nav-soundsystems" :
                        //currentPage = "soundsystemsPage";
                        $nav_li_a.removeClass('current');
                        $(this).addClass('current');
                        $headerTitle.html("soundsystems");
                        $dropDownBtn.show();
                        $soundSystemMarkers.show();
                        break;
                    case "#nav-the-route" :
                        //currentPage = "routePage";
                        $nav_li_a.removeClass('current');
                        $(this).addClass('current');
                        $headerTitle.html("the route");
                        if ( $soundsystemMenu.hasClass('enabled') ) { $soundsystemMenu.removeClass('enabled') };
                        $dropDownBtn.hide();
                        $routeMarkers.show();
                        break;
                    case "#nav-first-aid" :
                        //currentPage = "firstaidPage";
                        $nav_li_a.removeClass('current');
                        $(this).addClass('current');
                        $headerTitle.html("first aid");
                        if ( $soundsystemMenu.hasClass('enabled') ) { $soundsystemMenu.removeClass('enabled') };
                        $dropDownBtn.hide();
                        break;
                    case "#nav-toilets" : 
                        //currentPage = "toiletsPage";
                        $nav_li_a.removeClass('current');
                        $(this).addClass('current');
                        $headerTitle.html("toilets");
                        if ( $soundsystemMenu.hasClass('enabled') ) { $soundsystemMenu.removeClass('enabled') };
                        $dropDownBtn.hide();
                        break;
                }
                toggleSidebar();
                return false;
            });

    	});

        window.onload = function() {
            var myZoom;
            myZoom = new iScroll('map', { zoom: true, lockDirection: false, bounce: false, hScrollbar: false, vScrollbar: false });
            setTimeout(function() {
                myZoom.refresh();
            }, 0);
            console.log("window onload firing!");
        }
    	/*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        */
    }
};

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
				"Content" : "House, garage, R&B, hip hop, <br />bashment, reggae"
			},
			"Aba-shan-ti" : {
				"Title" : "Aba-shan-ti",
				"Content" : "Roots, reggae, dub"
			},
			"Arts-A-Light" : {
				"Title" : "Arts A Light",
				"Content" : "R&B, reggae, <br />hip hop, classic garage"
			},
			"Blackstar-Showtime" : {
				"Title" : "Blackstar Showtime",
				"Content" : "Reggae, ragga, soul"
			},
			"Channel-One" : {
				"Title" : "Channel One",
				"Content" : "Roots & culture"
			},
			"CMC-Matrix" : {
				"Title" : "CMC Matrix",
				"Content" : "Drum & bass"
			},
			"Different-Strokes" : {
				"Title" : "Different Strokes",
				"Content" : "Anything goes, house-party style"
			},
			"Disco-Hustlers" : {
				"Title" : "Disco Hustlers",
				"Content" : "House music through the ages"
			},
			"Disya-Generation" : {
				"Title" : "Disya Generation",
				"Content" : "R&B, hip hop, bashment, soca"
			},
            "Gazs-Rockin-Blues" : {
                "Title" : "Gaz's Rockin' Blues",
                "Content" : "Classic ska, revival, <br />New Orlean's R&B"
            },
            "GI-Roadshow" : {
                "Title" : "GI Roadshow",
                "Content" : "Reggae, bashment, salsa, R&B"
            },
            "Gladdy-Waxs-Roadshow" : {
                "Title" : "Gladdy Wax's Roadshow",
                "Content" : "Roots & culture, reggae & ska"
            },
            "GT-Flex-Roadshow" : {
                "Title" : "GT Flex Roadshow",
                "Content" : "R&B, ragga, soul, <br />old school, revival"
            },
            "High-Grade" : {
                "Title" : "High Grade",
                "Content" : "Reggae & roots"
            },
            "Jah-Observer" : {
                "Title" : "Jah Observer",
                "Content" : "Roots & culture"
            },
            "Killawatt" : {
                "Title" : "Killawatt",
                "Content" : "Reggae, ragga, dancehall"
            },
            "King-Tubbys" : {
                "Title" : "King Tubbys",
                "Content" : "Reggae, dancehall, bashment, R&B"
            },
            "Latin-Rave-Street-Jam" : {
                "Title" : "Latin Rave Street Jam",
                "Content" : "Latin & salsa"
            },
            "Lord-Gellys" : {
                "Title" : "Lord Gelly's",
                "Content" : "Reggae, R&B, soca & beyond"
            },
            "Mangrove-Sound" : {
                "Title" : "Mangrove Sound",
                "Content" : "Soca & reggae"
            },
            "Mastermind-Roadshow" : {
                "Title" : "Mastermind Roadshow",
                "Content" : "Upfront R&B, hip hop, <br />soul, old school, reggae"
            },
            "Mellowtone" : {
                "Title" : "Mellowtone",
                "Content" : "Soul, ragga, R&B, revival"
            },
            "Metro-Glory" : {
                "Title" : "Metro Glory",
                "Content" : "House to roots"
            },
            "Nasty-Love-Mixing-Lab" : {
                "Title" : "Nasty Love Mixing Lab",
                "Content" : "Reggae, ragga, hip hop, R&B"
            },
            "Peoples-Sound" : {
                "Title" : "People's Sound",
                "Content" : "Old & new reggae"
            },
            "Pineapple-Tribe" : {
                "Title" : "Pineapple Tribe",
                "Content" : "Techno & breaks"
            },
            "Rapattack" : {
                "Title" : "Rapattack",
                "Content" : "Old school soul, <br />rare groove, UKG, funky"
            },
            "Rough-But-Sweet" : {
                "Title" : "Rough But Sweet",
                "Content" : "Reggae, dub, calypso, garage"
            },
            "Sancho-Panza" : {
                "Title" : "Sancho Panza",
                "Content" : "Funky house, disco, techno"
            },
            "Saxon-Studio" : {
                "Title" : "Saxon Studio",
                "Content" : "Ragga & reggae"
            },
            "Sir-Lloyd" : {
                "Title" : "Sir Lloyd",
                "Content" : "R&B & reggae"
            },
            "Sir-Valdez" : {
                "Title" : "Sir Valdez",
                "Content" : "R&B, hip hop, ragga"
            },
            "SSP-Sound-System" : {
                "Title" : "SSP Sound System",
                "Content" : "Funky & soulful house, UKG, classics"
            },
            "The-Fun-Bunch" : {
                "Title" : "The Fun Bunch",
                "Content" : "R&B, hip hop, garage, boogie"
            },
            "Virgo-International" : {
                "Title" : "Virgo International",
                "Content" : "Reggae, soca, <br />hip hop, R&B, garage"
            },
            "Westbourne-Park" : {
                "Title" : "Westbourne Park",
                "Content" : ""
            },
            "Ladbroke-Grove" : {
                "Title" : "Ladbroke Grove",
                "Content" : "<i>Travel disruptions are <br />not yet available</i>"
            },
            "Royal-Oak" : {
                "Title" : "Royal Oak",
                "Content" : "<i>Travel disruptions are <br />not yet available</i>"
            },
            "Bayswater" : {
                "Title" : "Bayswater",
                "Content" : "<i>Travel disruptions are <br />not yet available</i>"
            },
            "NH-gate" : {
                "Title" : "Notting Hill Gate",
                "Content" : "<i>Travel disruptions are <br />not yet available</i>"
            }
		};

    	Zepto(function($){
    		console.log("zepto is ready!");

    		var $headerTitle = $("#headerTitle"),
                $panelBtn = $("#panelBtn"),
    			$dropDownBtn = $("#dropDownBtn"),
    			$soundsystemMenu = $("#soundsystemMenu"),
    			$soundsystemMenu_a = $soundsystemMenu.find("a"),
    			$youAreHere = $("#youAreHere"),
    			$soundSystemMarkers = $("#soundSystemMarkers"),
    			//$marker = $(".marker"),
                $marker = $soundSystemMarkers.find("a").add("#stationMarkers a"),
    			$popoverBlock = $("#popoverBlock"),
                $closeBtn = $popoverBlock.find("#closeBtn"),
    			$popoverTitle = $popoverBlock.find("#popoverTitle"),
    			$popoverContent = $popoverBlock.find("#popoverContent"),
                $map = $("#map");

            currentPage = "soundsystemsPage";
            switch ( currentPage ) {
                case "soundsystemsPage" :
                    $headerTitle.html("soundsystems");
                    $dropDownBtn.show();
                    $soundSystemMarkers.show();
                    break;
                case "routePage" :
                    $headerTitle.html("the route");
                    break;
                case "firstaidPage" :
                    $headerTitle.html("first aid");
                    break;
                default :
                    $headerTitle.html("default");
            }
    		
            var myScroll = new iScroll('scroll', { hScroll: false });
            var myZoom = new iScroll('map', { zoom: true, lockDirection: false, bounce: false });

            if ( longLeft !== null && latTop !== null) {
                //$youAreHere.css("left", longLeft +"%").css("top", latTop +"%");
                $youAreHere.css("left", "50%").css("top", "50%");
                $youAreHere.show();
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

            $("#geolocation").html("<br /><br /><br /><br />"+lat +" , "+ long).append("<br />"+ latTop +" , "+longLeft);

    		$dropDownBtn.on('tap', function() {
    			if ( $soundsystemMenu.css('display') == 'none' ) {
    				$soundsystemMenu.show();
    			} else {
					$soundsystemMenu.hide();
    			}

    			return false;
    		});


    		function infoBubble(dataName) {
    			// populate fields , position and show info bubble
    			var title = Data[dataName].Title;
    			var content = Data[dataName].Content;
    			$popoverTitle.html(title);
    			$popoverContent.html(content);
    			$popoverBlock.show();
    		};
    		
    		$marker.on('tap', function() {
    			var dataName = $(this).attr("data-name");
    			infoBubble(dataName);
    			return false;
    		});

    		$soundsystemMenu_a.on('tap', function() {
    			var dataName = $(this).attr("data-name");
    			$soundsystemMenu.hide();
    			infoBubble(dataName);
    			return false;
    		});

            $closeBtn.add($map).on('tap', function() {
                $popoverBlock.hide();
                return false;
            });


            function revealPanel() {
                console.log("reveal Panel function fired!");
            }

            $panelBtn.on('tap', function() {
                revealPanel();
                return false;
            });

    	});
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

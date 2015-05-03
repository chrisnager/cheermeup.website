module.exports = function() {
    var value = "Hey I'm a value and I'm being returned from a factory!";

    var getEmojis = function() {
        var emojis = ['&#x1F004;','&#x1F0CF;','&#x1F170;','&#x1F171;','&#x1F17E;','&#x1F17F;','&#x1F18E;','&#x1F191;','&#x1F192;','&#x1F193;','&#x1F194;','&#x1F195;','&#x1F196;','&#x1F197;','&#x1F198;','&#x1F199;','&#x1F19A;','&#x1F1E6;','&#x1F1E7;','&#x1F1E8;&#x1F1F3;','&#x1F1E8;','&#x1F1E9;&#x1F1EA;','&#x1F1E9;','&#x1F1EA;&#x1F1F8;','&#x1F1EA;','&#x1F1EB;&#x1F1F7;','&#x1F1EB;','&#x1F1EC;&#x1F1E7;','&#x1F1EC;','&#x1F1ED;','&#x1F1EE;&#x1F1F9;','&#x1F1EE;','&#x1F1EF;&#x1F1F5;','&#x1F1EF;','&#x1F1F0;&#x1F1F7;','&#x1F1F0;','&#x1F1F1;','&#x1F1F2;','&#x1F1F3;','&#x1F1F4;','&#x1F1F5;','&#x1F1F6;','&#x1F1F7;&#x1F1FA;','&#x1F1F7;','&#x1F1F8;','&#x1F1F9;','&#x1F1FA;&#x1F1F8;','&#x1F1FA;','&#x1F1FB;','&#x1F1FC;','&#x1F1FD;','&#x1F1FE;','&#x1F1FF;','&#x1F201;','&#x1F202;','&#x1F21A;','&#x1F22F;','&#x1F232;','&#x1F233;','&#x1F234;','&#x1F235;','&#x1F236;','&#x1F237;','&#x1F238;','&#x1F239;','&#x1F23A;','&#x1F250;','&#x1F251;','&#x1F300;','&#x1F301;','&#x1F302;','&#x1F303;','&#x1F304;','&#x1F305;','&#x1F306;','&#x1F307;','&#x1F308;','&#x1F309;','&#x1F30A;','&#x1F30B;','&#x1F30C;','&#x1F30D;','&#x1F30E;','&#x1F30F;','&#x1F310;','&#x1F311;','&#x1F312;','&#x1F313;','&#x1F314;','&#x1F315;','&#x1F316;','&#x1F317;','&#x1F318;','&#x1F319;','&#x1F31A;','&#x1F31B;','&#x1F31C;','&#x1F31D;','&#x1F31E;','&#x1F31F;','&#x1F320;','&#x1F330;','&#x1F331;','&#x1F332;','&#x1F333;','&#x1F334;','&#x1F335;','&#x1F337;','&#x1F338;','&#x1F339;','&#x1F33A;','&#x1F33B;','&#x1F33C;','&#x1F33D;','&#x1F33E;','&#x1F33F;','&#x1F340;','&#x1F341;','&#x1F342;','&#x1F343;','&#x1F344;','&#x1F345;','&#x1F346;','&#x1F347;','&#x1F348;','&#x1F349;','&#x1F34A;','&#x1F34B;','&#x1F34C;','&#x1F34D;','&#x1F34E;','&#x1F34F;','&#x1F350;','&#x1F351;','&#x1F352;','&#x1F353;','&#x1F354;','&#x1F355;','&#x1F356;','&#x1F357;','&#x1F358;','&#x1F359;','&#x1F35A;','&#x1F35B;','&#x1F35C;','&#x1F35D;','&#x1F35E;','&#x1F35F;','&#x1F360;','&#x1F361;','&#x1F362;','&#x1F363;','&#x1F364;','&#x1F365;','&#x1F366;','&#x1F367;','&#x1F368;','&#x1F369;','&#x1F36A;','&#x1F36B;','&#x1F36C;','&#x1F36D;','&#x1F36E;','&#x1F36F;','&#x1F370;','&#x1F371;','&#x1F372;','&#x1F373;','&#x1F374;','&#x1F375;','&#x1F376;','&#x1F377;','&#x1F378;','&#x1F379;','&#x1F37A;','&#x1F37B;','&#x1F37C;','&#x1F380;','&#x1F381;','&#x1F382;','&#x1F383;','&#x1F384;','&#x1F385;','&#x1F386;','&#x1F387;','&#x1F388;','&#x1F389;','&#x1F38A;','&#x1F38B;','&#x1F38C;','&#x1F38D;','&#x1F38E;','&#x1F38F;','&#x1F390;','&#x1F391;','&#x1F392;','&#x1F393;','&#x1F3A0;','&#x1F3A1;','&#x1F3A2;','&#x1F3A3;','&#x1F3A4;','&#x1F3A5;','&#x1F3A6;','&#x1F3A7;','&#x1F3A8;','&#x1F3A9;','&#x1F3AA;','&#x1F3AB;','&#x1F3AC;','&#x1F3AD;','&#x1F3AE;','&#x1F3AF;','&#x1F3B0;','&#x1F3B1;','&#x1F3B2;','&#x1F3B3;','&#x1F3B4;','&#x1F3B5;','&#x1F3B6;','&#x1F3B7;','&#x1F3B8;','&#x1F3B9;','&#x1F3BA;','&#x1F3BB;','&#x1F3BC;','&#x1F3BD;','&#x1F3BE;','&#x1F3BF;','&#x1F3C0;','&#x1F3C1;','&#x1F3C2;','&#x1F3C3;','&#x1F3C4;','&#x1F3C6;','&#x1F3C7;','&#x1F3C8;','&#x1F3C9;','&#x1F3CA;','&#x1F3E0;','&#x1F3E1;','&#x1F3E2;','&#x1F3E3;','&#x1F3E4;','&#x1F3E5;','&#x1F3E6;','&#x1F3E7;','&#x1F3E8;','&#x1F3E9;','&#x1F3EA;','&#x1F3EB;','&#x1F3EC;','&#x1F3ED;','&#x1F3EE;','&#x1F3EF;','&#x1F3F0;','&#x1F400;','&#x1F401;','&#x1F402;','&#x1F403;','&#x1F404;','&#x1F405;','&#x1F406;','&#x1F407;','&#x1F408;','&#x1F409;','&#x1F40A;','&#x1F40B;','&#x1F40C;','&#x1F40D;','&#x1F40E;','&#x1F40F;','&#x1F410;','&#x1F411;','&#x1F412;','&#x1F413;','&#x1F414;','&#x1F415;','&#x1F416;','&#x1F417;','&#x1F418;','&#x1F419;','&#x1F41A;','&#x1F41B;','&#x1F41C;','&#x1F41D;','&#x1F41E;','&#x1F41F;','&#x1F420;','&#x1F421;','&#x1F422;','&#x1F423;','&#x1F424;','&#x1F425;','&#x1F426;','&#x1F427;','&#x1F428;','&#x1F429;','&#x1F42A;','&#x1F42B;','&#x1F42C;','&#x1F42D;','&#x1F42E;','&#x1F42F;','&#x1F430;','&#x1F431;','&#x1F432;','&#x1F433;','&#x1F434;','&#x1F435;','&#x1F436;','&#x1F437;','&#x1F438;','&#x1F439;','&#x1F43A;','&#x1F43B;','&#x1F43C;','&#x1F43D;','&#x1F43E;','&#x1F440;','&#x1F442;','&#x1F443;','&#x1F444;','&#x1F445;','&#x1F446;','&#x1F447;','&#x1F448;','&#x1F449;','&#x1F44A;','&#x1F44B;','&#x1F44C;','&#x1F44D;','&#x1F44E;','&#x1F44F;','&#x1F450;','&#x1F451;','&#x1F452;','&#x1F453;','&#x1F454;','&#x1F455;','&#x1F456;','&#x1F457;','&#x1F458;','&#x1F459;','&#x1F45A;','&#x1F45B;','&#x1F45C;','&#x1F45D;','&#x1F45E;','&#x1F45F;','&#x1F460;','&#x1F461;','&#x1F462;','&#x1F463;','&#x1F464;','&#x1F465;','&#x1F466;','&#x1F467;','&#x1F468;','&#x1F469;','&#x1F46A;','&#x1F46B;','&#x1F46C;','&#x1F46D;','&#x1F46E;','&#x1F46F;','&#x1F470;','&#x1F471;','&#x1F472;','&#x1F473;','&#x1F474;','&#x1F475;','&#x1F476;','&#x1F477;','&#x1F478;','&#x1F479;','&#x1F47A;','&#x1F47B;','&#x1F47C;','&#x1F47D;','&#x1F47E;','&#x1F47F;','&#x1F480;','&#x1F481;','&#x1F482;','&#x1F483;','&#x1F484;','&#x1F485;','&#x1F486;','&#x1F487;','&#x1F488;','&#x1F489;','&#x1F48A;','&#x1F48B;','&#x1F48C;','&#x1F48D;','&#x1F48E;','&#x1F48F;','&#x1F490;','&#x1F491;','&#x1F492;','&#x1F493;','&#x1F494;','&#x1F495;','&#x1F496;','&#x1F497;','&#x1F498;','&#x1F499;','&#x1F49A;','&#x1F49B;','&#x1F49C;','&#x1F49D;','&#x1F49E;','&#x1F49F;','&#x1F4A0;','&#x1F4A1;','&#x1F4A2;','&#x1F4A3;','&#x1F4A4;','&#x1F4A5;','&#x1F4A6;','&#x1F4A7;','&#x1F4A8;','&#x1F4A9;','&#x1F4AA;','&#x1F4AB;','&#x1F4AC;','&#x1F4AD;','&#x1F4AE;','&#x1F4AF;','&#x1F4B0;','&#x1F4B1;','&#x1F4B2;','&#x1F4B3;','&#x1F4B4;','&#x1F4B5;','&#x1F4B6;','&#x1F4B7;','&#x1F4B8;','&#x1F4B9;','&#x1F4BA;','&#x1F4BB;','&#x1F4BC;','&#x1F4BD;','&#x1F4BE;','&#x1F4BF;','&#x1F4C0;','&#x1F4C1;','&#x1F4C2;','&#x1F4C3;','&#x1F4C4;','&#x1F4C5;','&#x1F4C6;','&#x1F4C7;','&#x1F4C8;','&#x1F4C9;','&#x1F4CA;','&#x1F4CB;','&#x1F4CC;','&#x1F4CD;','&#x1F4CE;','&#x1F4CF;','&#x1F4D0;','&#x1F4D1;','&#x1F4D2;','&#x1F4D3;','&#x1F4D4;','&#x1F4D5;','&#x1F4D6;','&#x1F4D7;','&#x1F4D8;','&#x1F4D9;','&#x1F4DA;','&#x1F4DB;','&#x1F4DC;','&#x1F4DD;','&#x1F4DE;','&#x1F4DF;','&#x1F4E0;','&#x1F4E1;','&#x1F4E2;','&#x1F4E3;','&#x1F4E4;','&#x1F4E5;','&#x1F4E6;','&#x1F4E7;','&#x1F4E8;','&#x1F4E9;','&#x1F4EA;','&#x1F4EB;','&#x1F4EC;','&#x1F4ED;','&#x1F4EE;','&#x1F4EF;','&#x1F4F0;','&#x1F4F1;','&#x1F4F2;','&#x1F4F3;','&#x1F4F4;','&#x1F4F5;','&#x1F4F6;','&#x1F4F7;','&#x1F4F9;','&#x1F4FA;','&#x1F4FB;','&#x1F4FC;','&#x1F500;','&#x1F501;','&#x1F502;','&#x1F503;','&#x1F504;','&#x1F505;','&#x1F506;','&#x1F507;','&#x1F508;','&#x1F509;','&#x1F50A;','&#x1F50B;','&#x1F50C;','&#x1F50D;','&#x1F50E;','&#x1F50F;','&#x1F510;','&#x1F511;','&#x1F512;','&#x1F513;','&#x1F514;','&#x1F515;','&#x1F516;','&#x1F517;','&#x1F518;','&#x1F519;','&#x1F51A;','&#x1F51B;','&#x1F51C;','&#x1F51D;','&#x1F51E;','&#x1F51F;','&#x1F520;','&#x1F521;','&#x1F522;','&#x1F523;','&#x1F524;','&#x1F525;','&#x1F526;','&#x1F527;','&#x1F528;','&#x1F529;','&#x1F52A;','&#x1F52B;','&#x1F52C;','&#x1F52D;','&#x1F52E;','&#x1F52F;','&#x1F530;','&#x1F531;','&#x1F532;','&#x1F533;','&#x1F534;','&#x1F535;','&#x1F536;','&#x1F537;','&#x1F538;','&#x1F539;','&#x1F53A;','&#x1F53B;','&#x1F53C;','&#x1F53D;','&#x1F550;','&#x1F551;','&#x1F552;','&#x1F553;','&#x1F554;','&#x1F555;','&#x1F556;','&#x1F557;','&#x1F558;','&#x1F559;','&#x1F55A;','&#x1F55B;','&#x1F55C;','&#x1F55D;','&#x1F55E;','&#x1F55F;','&#x1F560;','&#x1F561;','&#x1F562;','&#x1F563;','&#x1F564;','&#x1F565;','&#x1F566;','&#x1F567;','&#x1F5FB;','&#x1F5FC;','&#x1F5FD;','&#x1F5FE;','&#x1F5FF;','&#x1F600;','&#x1F601;','&#x1F602;','&#x1F603;','&#x1F604;','&#x1F605;','&#x1F606;','&#x1F607;','&#x1F608;','&#x1F609;','&#x1F60A;','&#x1F60B;','&#x1F60C;','&#x1F60D;','&#x1F60E;','&#x1F60F;','&#x1F610;','&#x1F611;','&#x1F612;','&#x1F613;','&#x1F614;','&#x1F615;','&#x1F616;','&#x1F617;','&#x1F618;','&#x1F619;','&#x1F61A;','&#x1F61B;','&#x1F61C;','&#x1F61D;','&#x1F61E;','&#x1F61F;','&#x1F620;','&#x1F621;','&#x1F622;','&#x1F623;','&#x1F624;','&#x1F625;','&#x1F626;','&#x1F627;','&#x1F628;','&#x1F629;','&#x1F62A;','&#x1F62B;','&#x1F62C;','&#x1F62D;','&#x1F62E;','&#x1F62F;','&#x1F630;','&#x1F631;','&#x1F632;','&#x1F633;','&#x1F634;','&#x1F635;','&#x1F636;','&#x1F637;','&#x1F638;','&#x1F639;','&#x1F63A;','&#x1F63B;','&#x1F63C;','&#x1F63D;','&#x1F63E;','&#x1F63F;','&#x1F640;','&#x1F645;','&#x1F646;','&#x1F647;','&#x1F648;','&#x1F649;','&#x1F64A;','&#x1F64B;','&#x1F64C;','&#x1F64D;','&#x1F64E;','&#x1F64F;','&#x1F680;','&#x1F681;','&#x1F682;','&#x1F683;','&#x1F684;','&#x1F685;','&#x1F686;','&#x1F687;','&#x1F688;','&#x1F689;','&#x1F68A;','&#x1F68B;','&#x1F68C;','&#x1F68D;','&#x1F68E;','&#x1F68F;','&#x1F690;','&#x1F691;','&#x1F692;','&#x1F693;','&#x1F694;','&#x1F695;','&#x1F696;','&#x1F697;','&#x1F698;','&#x1F699;','&#x1F69A;','&#x1F69B;','&#x1F69C;','&#x1F69D;','&#x1F69E;','&#x1F69F;','&#x1F6A0;','&#x1F6A1;','&#x1F6A2;','&#x1F6A3;','&#x1F6A4;','&#x1F6A5;','&#x1F6A6;','&#x1F6A7;','&#x1F6A8;','&#x1F6A9;','&#x1F6AA;','&#x1F6AB;','&#x1F6AC;','&#x1F6AD;','&#x1F6AE;','&#x1F6AF;','&#x1F6B0;','&#x1F6B1;','&#x1F6B2;','&#x1F6B3;','&#x1F6B4;','&#x1F6B5;','&#x1F6B6;','&#x1F6B7;','&#x1F6B8;','&#x1F6B9;','&#x1F6BA;','&#x1F6BB;','&#x1F6BC;','&#x1F6BD;','&#x1F6BE;','&#x1F6BF;','&#x1F6C0;','&#x1F6C1;','&#x1F6C2;','&#x1F6C3;','&#x1F6C4;','&#x1F6C5;','&#x203C;','&#x2049;','&#x2122;','&#x2139;','&#x2194;','&#x2195;','&#x2196;','&#x2197;','&#x2198;','&#x2199;','&#x21A9;','&#x21AA;','&#x23;&#x20E3;','&#x231A;','&#x231B;','&#x23E9;','&#x23EA;','&#x23EB;','&#x23EC;','&#x23F0;','&#x23F3;','&#x24C2;','&#x25AA;','&#x25AB;','&#x25B6;','&#x25C0;','&#x25FB;','&#x25FC;','&#x25FD;','&#x25FE;','&#x2600;','&#x2601;','&#x260E;','&#x2611;','&#x2614;','&#x2615;','&#x261D;','&#x263A;','&#x2648;','&#x2649;','&#x264A;','&#x264B;','&#x264C;','&#x264D;','&#x264E;','&#x264F;','&#x2650;','&#x2651;','&#x2652;','&#x2653;','&#x2660;','&#x2663;','&#x2665;','&#x2666;','&#x2668;','&#x267B;','&#x267F;','&#x2693;','&#x26A0;','&#x26A1;','&#x26AA;','&#x26AB;','&#x26BD;','&#x26BE;','&#x26C4;','&#x26C5;','&#x26CE;','&#x26D4;','&#x26EA;','&#x26F2;','&#x26F3;','&#x26F5;','&#x26FA;','&#x26FD;','&#x2702;','&#x2705;','&#x2708;','&#x2709;','&#x270A;','&#x270B;','&#x270C;','&#x270F;','&#x2712;','&#x2714;','&#x2716;','&#x2728;','&#x2733;','&#x2734;','&#x2744;','&#x2747;','&#x274C;','&#x274E;','&#x2753;','&#x2754;','&#x2755;','&#x2757;','&#x2764;','&#x2795;','&#x2796;','&#x2797;','&#x27A1;','&#x27B0;','&#x27BF;','&#x2934;','&#x2935;','&#x2B05;','&#x2B06;','&#x2B07;','&#x2B1B;','&#x2B1C;','&#x2B50;','&#x2B55;','&#x30;&#x20E3;','&#x3030;','&#x303D;','&#x31;&#x20E3;','&#x32;&#x20E3;','&#x3297;','&#x3299;','&#x33;&#x20E3;','&#x34;&#x20E3;','&#x35;&#x20E3;','&#x36;&#x20E3;','&#x37;&#x20E3;','&#x38;&#x20E3;','&#x39;&#x20E3;','&#xA9;','&#xAE;','&#xE50A;']
        return emojis
    }

    var getBackgrounds = function() {
        var backgrounds = [
            'https://media1.giphy.com/media/10pSeSHjy0OMV2/200.gif',
            'https://media3.giphy.com/media/O3GJk0JA3dDsk/200.gif',
            'https://s3.amazonaws.com/giphygifs/media/GwGXoeb0gm7sc/giphy.gif',
            'https://media4.giphy.com/media/nl5wVNRJSWcO4/200.gif',
            'https://media0.giphy.com/media/NTzW6P8cpt90Q/200_s.gif',
            'https://media4.giphy.com/media/Maz1hoeGskARW/200_s.gif',
        ]
        return backgrounds
    }
    
    var getQuotes = function() {
        var quotes = [
            'Aww Yeah Dawg',
            'Wut',
            'Noice',
            'Wow',
            '4 Real',
            'My Dawg',
        ]
        return quotes
    }

    var update = function(req) {
        value = req
        return req 
    }

    return {
        getEmojis: getEmojis,
        getBackgrounds: getBackgrounds,
        getQuotes: getQuotes,
        update: update
    }
}
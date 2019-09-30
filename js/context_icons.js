/* writes the HTML for handling the floating images
         which serve as an index for blog posts  */


var parms = document.getElementById('level');
var parms = parms.innerHTML;
parms=parms.split(",");
parm1 = parseInt(parms[0]);

console.log('parm1 = ' + parm1); 

var iconArray = new Array;

setIconArray();

var lngth = iconArray.length+1;
var iwidth = iconArray.length * 108;

console.log('#images = ' + lngth + ', width = ' + iwidth);

/* ----- set up for images, 1 row ------*/

var itext1 = '<div class="noborder" style="overflow: auto; width: 650px; height: 130px;">';

itext1 += '<div class="noborder" style="width: ';
itext1 += iwidth;
itext1 += 'px;">';

var result = document.getElementById('images');
var div = document.createElement('div');

/* ----  write the floating images ---    */

var i;
var dir;
if (parm1==1){
 dir='../icons/'
}
else {
 dir='icons/'; 
}

var itext;

for (i=0; i< iconArray.length; i++) {

itext='<a class="float1"  href="https://thomasgardnerofsalem.blogspot.com/' + iconArray[i][0] + '.html"> <img src="' + dir + iconArray[i][1] +'.jpg"></a>';

/* console.log(itext); */

itext1+=itext;

}

itext1 +='<a class="float1" href="https://thomasgardnersociety.org"> <img src="' + dir + 'MainSite.jpg"></a>';      

itext1 +='</div></div>';      

div.innerHTML = itext1;
result.appendChild(div);

/* count of posts covered by year
         There are 380 posts as of 09/30/2019

2010 --    9
2011 --   22
2012 --   15
2013 --   16
2014 --   23
2015 --   22
2016 --   15
2017 --   24
2018 --   19
2019 --   45     
total -- 209
*/

function setIconArray (){
iconArray = [
['2010/09/welcome','Welcome'],
['2010/09/kids','Kids'],
['2010/09/gardners-and-gardners','GardnersandGardners'],
['2010/09/related-families-and-sites','FamilySites'],
['2010/10/where-is-thomas','WhereisThomas'],
['2010/10/two-generations','TwoGenerations'],
['2010/11/historical-genealogy', 'Bosworth'],
['2010/12/early-times', 'ThomasWT'],
['2010/12/more-progeny', 'Progeny'],
<!-- 2010 9-->
['2011/01/southeast-essex-county', 'SouthEssex'],
['2011/01/two-cousins', 'TwoCousins'],
['2011/02/dr-frank-gardner', 'DrFrankGardner'], 
['2011/02/sarah-balch', 'SarahBalch'], 
['2011/03/nathaniel-bowditch', 'NathanielBowditch'],
['2011/04/lucretia-coffin-mott', 'LucretiaMott'],
['2011/05/doomsday-book', 'Domesday'],
['2011/05/old-planters', 'BeverlyPlanters'],
['2011/05/where-is-thomas-ii', 'WhereisThomasII'],
['2011/05/times-and-more-times', 'TimesandMoreTimes'],
['2011/06/on-blogs', 'OnBlogs'],
['2011/07/richard-and-john', 'RandJandT'],
['2011/07/samuel-knapp-gardner', 'Warof1812'],
['2011/08/thomas-house', 'ThomasHouse'],
['2011/08/john-tylly', 'JohnTylly'], 
['2011/08/isabella', 'Isabella'],
['2011/08/gardners-beacon-vol-i-no-3', 'GB_I_3'],
['2011/09/ruth-gardner', 'RuthandNathaniel'],
['2011/10/gardners-beacon-vol-i-no-4', 'SalemMadness'],
['2011/12/mary-gardner-coffin', 'MaryGardnerCoffin'], 
['2011/12/gardner-pingree-house-and-murder', 'GardnerPingree'],
['2011/12/posts-of-interest-2011', 'Interests2011'],
<!-- 2011 22 -->
['2012/01/where-was-thomas', 'ThomasWasWhere'],
['2012/02/where-was-thomas-ii', 'WhereWas'],
['2012/03/thomasgardnersocietyorg', 'CMSagain'],
['2012/04/gardners-beacon-vol-ii-no-2', 'GB_II_2'],
['2012/05/maypole', 'Maypole'],
['2012/06/uss-merrimack-1798', 'USSMerrimack'],
['2012/06/gardners-beacon-vol-ii-no-3', 'GB_II_3'],
['2012/09/gardners-beacon-vol-ii-no-4', 'GB_II_4'],
['2012/10/imagine-meeting', 'ImagineMeeting'],
['2012/10/gardners-beacon-vol-ii-no-5', 'GB_II_5'],
['2012/11/how-many-wives', 'HowManyWives'],
['2012/11/black-death', 'BlackDeath'],
['2012/12/old-planters-massachusetts', 'OldPlantersMass'],
['2012/12/aunts-uncles-cousins', 'Joseph&Ann'],
['2012/12/gardners-beacon-vol-ii-no-6', 'GB_II_6'],
<!-- 2012 15-->
['2013/01/john-goff', 'SalemNantucket'],
['2013/01/400th-anniversary', '400thAnniversaries'],
['2013/02/meeting-again', 'DelusionofSatan'],
['2013/03/plus-or-minus-arrival', 'Arrival_sm'],
['2013/03/origins-motivations', 'OriginsMotives'],
['2013/04/heritage-society-community', 'HSC'],
['2013/05/john-farmer', 'JohnFarmer'],
['2013/07/gardners-beacon-vol-iii-no-2', 'GB_III_2'],
['2013/08/benjamin-peirce', 'BenjaminPeirce'],
['2013/08/a-thomas-here-and-thomas-there', 'HereThere'],
['2013/09/essex-recollections', 'EssexRecollections'],
['2013/10/rev-john-white-further', 'JohnWhite'],
['2013/11/george-d-phippen', 'GeorgeDPhippen'],
['2013/11/gardners-beacon-vol-iii-no-3', 'GB_III_3'],
['2013/12/gardners-beacon-vol-iii-no-4', 'GB_III_4'],
<!-- 2013 16  -->
['2014/01/telling-stories', 'MelissaDBerry'],
['2014/02/numbers-again', 'Numbers_sm'],
['2014/02/electronic-footprint', 'ElectronicFootprint'],
['2014/03/the-glory-of-cape-ann', 'CapeAnn_sm'],
['2014/03/gardners-beacon-vol-iv-no-1', 'GB_IV_1'],
['2014/04/andover-ordeal', 'AndoverOrdeal'],
['2014/05/massachusetts-magazine', 'TOCofTMM'],
['2014/05/incorporation', 'Incorporation'], 
['2014/05/blogs-and-sites', 'SamuelMaverick'], 
['2014/06/great-salem-fire-of-1914', 'SalemFire'],
['2014/07/john-gardner-and-merrimack-river', 'JohnandMerrimack'],
['2014/07/web-site-reconfigure', 'TGS1'],
['2014/07/1st-governor', 'FirstGovernor'],
['2014/08/sign-of-times', 'SignOfTimes'],
['2014/08/the-gardner-annals', 'TGAVolINo1'],
['2014/09/diversion-gloucester-charles-olson', 'CharlesOlson'],
['2014/09/thomas-and-margaret', 'ThomasMargaret'],
['2014/09/gardners-beacon-vol-iv-no-3', 'GB_IV_3'],
['2014/10/status-and-focus', 'StatusFocus'],
['2014/10/savage-et-al', 'Savage'],
['2014/11/historic-nantucket', 'HistoricNantucket'],
['2014/11/places', 'Places'],
['2014/12/gardners-beacon-vol-iv-no-4', 'GB_IV_4'],
<!-- 2014 23 -->
['2015/01/the-gardner-jonah', 'GardnerJonah'],
['2015/01/zouch-phoenix', 'ZouchPhenix'],
['2015/02/gardner-research-and-discussion', 'GardnerResearch'],
['2015/03/answering-questions', 'QuestionsAnswers'],
['2015/03/things-nordic', 'Rope'],
['2015/04/richard-iii-and-gardner', 'RichardIII'],
['2015/04/posts-and-more', 'PostsAndMore'],
['2015/05/rev-hubbard', 'RevHubbard'],
['2015/05/john-and-friends', 'Leap2016'],
['2015/05/the-massachusetts-magazine', 'MassMag'],
['2015/05/featured-research', 'FeaturedResearch'],
['2015/05/gardners-beacon-vol-v-no-1', 'TG_KM_sm'],
['2015/06/vicissitude-and-its-puzzles', 'WilsonGardner'],
['2015/07/regimental-history-series-background', 'SiegeofBoston'],
['2015/08/gardner-ks', 'GardnerKS'],
['2015/08/cape-ann-settlers', 'CapeAnnSettlers'],
['2015/09/unique-ancestors', 'UniqueAncestors'],
['2015/10/wikipedia', 'Wikipedia'],
['2015/11/gardners-beacon-vol-v-no-2', 'GB_V_2'],
['2015/12/cape-ann-1623', 'CapeAnn1623'],
['2015/12/captain-pollard', 'CaptPollard'],
['2012/12/the-gardner-annals-vol-ii-no-2', 'TGAVolIINo2'],
['2015/12/find-grave-gardner', 'FindAGrave'],
<!-- 2015 22  -->
['2016/01/thomas-and-margaret-archetypal-pair', 'TMArchetypal'],
['2016/02/leap-day-2016', 'Leap2016'],
['2016/03/more-on-gold-rush', 'SeeingTheEliphant'],
['2016/04/cape-ann-retrospective', 'CapeAnnRetrospective'],
['2016/05/the-almost-forgotten', 'AlmostForgotten'],
['2016/06/trails-again', 'WestwardHo'],
['2016/07/gardiners-island', 'GardinersIsland'],
['2016/08/gardner-co', 'GardnerCo_sm'],
['2016/09/albions-seed', 'AlbionsSeed'],
['2016/09/gardner-wayman-peabody-mill', 'Tidemill_sm'],
['2016/10/privileged-or-not', 'AbigailAndSilvester'],
['2016/10/another-trail', 'Mormon'],
['2016/11/ra-douglas-lithgow-md-lld', 'DouglasLithgow'],
['2016/11/2016/11/john-gardner-again', 'JohnAgain'],
['2016/12/gardners-beacon-vol-vi-no-2', 'GB_VI_2'],
<!-- 2016  15 -->
['2017/01/tmm-review', 'TMM_sm'],
['2017/02/us-and-us', 'USandus'],
['2017/03/thomas-gardner-of-roxbury', 'Rev_John_Wise_sm'],
['2017/03/the-hebraist', 'NathanielEaton'],
['2017/04/essex-institute-historical-collections', 'Essex_sm'],
['2017/04/review-overview', 'Overview_sm'],
['2017/05/lucie-following-sidney', 'LucieAndSidney'],
['2017/05/magazines', 'Magazines'],
['2017/05/lyceum', 'Lyceum'],
['2017/06/gardner-research-citation', 'Citation_sm'],
['2017/06/the-old-planters-society', 'OldPlantersSociety_sm'],
['2017/06/gardners-beacon-vol-vii-no-1', 'GB_VII_1'],
['2017/06/judge-francis-m-thompson', 'JudgeFMT'],
['2017/06/thomas-wentworth-higginson', 'TWH'],
['2017/06/franklin-benjamin-sanborn', 'FBS'],
['2017/07/kansas-and-lawrence','LawrenceKansas'],
['2017/08/research-for-next-issue-of-tga', 'TMM_VI_thru_XI_sm'],
['2017/09/nehgr-2017', 'NEHGR_sm'], 
['2017/10/1st-printing', '1st_printing_sm'], 
['2017/11/gardners-beacon-vol-vii-no-2', 'GB_VII_2_sm'], 
['2017/11/first-thanksgiving', '1stThanksgiving'],
['2017/11/southern-new-england', 'Virginia'],
['2017/12/american-manhood', 'PuritanCouple'],
['2017/12/alfred-l-gardner-phd', 'ALG'],
<!-- 2017 24 -->
['2018/01/last-issue-of-massachusetts-magazine', 'Front_and_count_sm'],
['2018/02/ground-zero', '1918_flu_sm'],
['2018/03/spirit-of-76', 'Bailey_book_sm'],
['2018/04/nehgs-as-mentor', 'NEHGS'],
['2018/05/1907-chart', 'Chart_1907_sm'],
['2018/06/pageant-of-salem', 'PageantofSalem'],
['2018/06/sources-for-tga-vol-iv-no-1', 'TGAVolIVNo1_sm'],
['2018/07/jedediah-strong-smith', 'JSSinCA_sm'],
['2018/08/margaret-anew', 'MargaretAnew'],
['2018/09/dr-frank-and-wikitree', 'DrFrank_sm'],
['2018/10/NewTwist', 'NewTwist'],
['2018/10/print-tga-iii-iv-and-gb-iv-v-vi-vii', 'GBandTGA'],
['2018/10/the-gardiner-that-was', 'GardinerOR'],
['2018/10/gardner-families-and-maine', 'GardnersMaine'],
['2018/10/locales-and-their-history', 'DARWichita'],
['2018/11/summaries', 'Summary_11_30_18'], 
['2018/12/gardners-beacon-vol-viii-no-2', 'GB_VIII_2'], 
['2018/12/culture-history-technology','MobileFriendly'],
['2018/12/posts-by-month-by-year', 'PostsStats'],
<!-- 2018 19 -->
['2019/01/29-december-1674', '29December1674'],
['2019/01/tenth-year', 'TenYearView'],
['2019/01/gems-of-salem', 'JohnGoff'],
['p/gardners-beacon', 'GBeacon'],
['2019/02/black-history-month', 'BlackHistory'],
['2019/02/gardners-beacon-vol-ix-no-1', 'GB_IV_1'],
['2019/02/reprints-dr-franks-books', 'Reprints'],
['2019/02/another-twist', 'MissingGraves'],
['2019/03/general-crisis', 'GeneralCrisis'],
['2019/03/collaterals', 'Collaterals'],
['2019/04/the-1st-year', '1stYear'],
['2019/04/general-lafayette', 'Lafayette'],
['2019/04/1st-copy-of-dr-franks-1907-book', '1stCopy'],
['2019/04/timelines', 'Timelines'],
['2019/04/south-danvers-church', 'SouthDanversChurch'],
['2019/04/the-view-in-color', 'Lakeman'],
['2019/05/gardners-bridge', 'GardnerBridge'],
['2019/05/how-close-is-close-ii', 'HowClose'],
['2019/05/sidneys-antiquarian', 'SidneysWork'],
['2019/05/which-railroad', 'WhichRailroad'],
['2019/05/masseys-cove', 'MasseysCove'],
['2019/05/memorial-day', 'Memorial_Day'],
['2019/06/technology-as-imperative', 'Techie_view'],
['2019/06/chronicles-of-old-salem', 'ChroniclesofOldSalem'],
['2019/06/sidney-his-discontinuance', 'SidneyPerleyEndAoE'],
['2019/06/tale-of-benjamin-west-patriot', 'LtBenWest'],
['2019/06/renovation-plus', 'Renovation'],
['2019/06/houses-again', 'HousesAgain'],
['2019/06/true-stories', 'TrueStories'],
['2019/06/two-thomas-gardners-in-salem', 'ThomasTimesTwo'],
['2019/07/gardners-beacon-vol-ix-no-2', 'GB_IX_2'],
['2019/07/massachusetts-400', 'Mass400'],
['2019/07/julia-ward-howe', 'JuliaWardHowe'],
['2019/07/dr-frank-and-henry-viii', 'DrFrankHenryVIII'],
['2019/07/top-ten-things', 'TopTenThings'],
['2019/08/ezra-pound', 'EzraPound'],
['2019/08/samuel-and-john', 'SonSamuel'],
['2019/08/thomas-needham-gardner', 'ThomasNGardner'],
['2019/09/3-trails', '3Trails'],
['2019/09/edward-iii', 'EdIIIBoris'],
['2019/09/families-sites-and-such', 'SitesAndSuch'],
['2019/09/charter-street-cemetery-salem-ma', 'CharterStreet'],
['2019/09/gallows-and-more', 'SidneyPerley']

<!-- 2019 44 + 1 (image of Main site) -->
]
}



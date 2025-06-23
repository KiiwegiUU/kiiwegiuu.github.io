gdjs.levelFiveCode = {};
gdjs.levelFiveCode.localVariables = [];
gdjs.levelFiveCode.GDgameTileObjects1_1final = [];

gdjs.levelFiveCode.GDNewTextObjects1= [];
gdjs.levelFiveCode.GDNewTextObjects2= [];
gdjs.levelFiveCode.GDNewTextObjects3= [];
gdjs.levelFiveCode.GDNewText2Objects1= [];
gdjs.levelFiveCode.GDNewText2Objects2= [];
gdjs.levelFiveCode.GDNewText2Objects3= [];
gdjs.levelFiveCode.GDNewText3Objects1= [];
gdjs.levelFiveCode.GDNewText3Objects2= [];
gdjs.levelFiveCode.GDNewText3Objects3= [];
gdjs.levelFiveCode.GDgameTileObjects1= [];
gdjs.levelFiveCode.GDgameTileObjects2= [];
gdjs.levelFiveCode.GDgameTileObjects3= [];
gdjs.levelFiveCode.GDsplatObjects1= [];
gdjs.levelFiveCode.GDsplatObjects2= [];
gdjs.levelFiveCode.GDsplatObjects3= [];
gdjs.levelFiveCode.GDincorrectAnswerObjects1= [];
gdjs.levelFiveCode.GDincorrectAnswerObjects2= [];
gdjs.levelFiveCode.GDincorrectAnswerObjects3= [];
gdjs.levelFiveCode.GDfooterObjects1= [];
gdjs.levelFiveCode.GDfooterObjects2= [];
gdjs.levelFiveCode.GDfooterObjects3= [];
gdjs.levelFiveCode.GDbackgroundObjects1= [];
gdjs.levelFiveCode.GDbackgroundObjects2= [];
gdjs.levelFiveCode.GDbackgroundObjects3= [];
gdjs.levelFiveCode.GDbackButtonObjects1= [];
gdjs.levelFiveCode.GDbackButtonObjects2= [];
gdjs.levelFiveCode.GDbackButtonObjects3= [];
gdjs.levelFiveCode.GDpauseButtonObjects1= [];
gdjs.levelFiveCode.GDpauseButtonObjects2= [];
gdjs.levelFiveCode.GDpauseButtonObjects3= [];
gdjs.levelFiveCode.GDstarHolderObjects1= [];
gdjs.levelFiveCode.GDstarHolderObjects2= [];
gdjs.levelFiveCode.GDstarHolderObjects3= [];
gdjs.levelFiveCode.GDstar1Objects1= [];
gdjs.levelFiveCode.GDstar1Objects2= [];
gdjs.levelFiveCode.GDstar1Objects3= [];
gdjs.levelFiveCode.GDstar2Objects1= [];
gdjs.levelFiveCode.GDstar2Objects2= [];
gdjs.levelFiveCode.GDstar2Objects3= [];
gdjs.levelFiveCode.GDstar3Objects1= [];
gdjs.levelFiveCode.GDstar3Objects2= [];
gdjs.levelFiveCode.GDstar3Objects3= [];
gdjs.levelFiveCode.GDcorrectWordTextObjects1= [];
gdjs.levelFiveCode.GDcorrectWordTextObjects2= [];
gdjs.levelFiveCode.GDcorrectWordTextObjects3= [];
gdjs.levelFiveCode.GDanswersNeededTextObjects1= [];
gdjs.levelFiveCode.GDanswersNeededTextObjects2= [];
gdjs.levelFiveCode.GDanswersNeededTextObjects3= [];
gdjs.levelFiveCode.GDpauseWordObjects1= [];
gdjs.levelFiveCode.GDpauseWordObjects2= [];
gdjs.levelFiveCode.GDpauseWordObjects3= [];
gdjs.levelFiveCode.GDPauseScreenObjects1= [];
gdjs.levelFiveCode.GDPauseScreenObjects2= [];
gdjs.levelFiveCode.GDPauseScreenObjects3= [];
gdjs.levelFiveCode.GDCloudObjects1= [];
gdjs.levelFiveCode.GDCloudObjects2= [];
gdjs.levelFiveCode.GDCloudObjects3= [];
gdjs.levelFiveCode.GDLevelSixTimeObjects1= [];
gdjs.levelFiveCode.GDLevelSixTimeObjects2= [];
gdjs.levelFiveCode.GDLevelSixTimeObjects3= [];
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects1= [];
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects2= [];
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects3= [];
gdjs.levelFiveCode.GDquestionMarkObjects1= [];
gdjs.levelFiveCode.GDquestionMarkObjects2= [];
gdjs.levelFiveCode.GDquestionMarkObjects3= [];


gdjs.levelFiveCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(gdjs.randomInRange(6, 9));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "generationRateIncreaser") >= 10;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() / 1.08);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}}

}


};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects2});
gdjs.levelFiveCode.eventsList1 = function(runtimeScene) {

};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects1});
gdjs.levelFiveCode.eventsList2 = function(runtimeScene) {

{



}


{



}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
{ //Subevents: 
gdjs.levelFiveCode.eventsList1(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.levelFiveCode.GDgameTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects1Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects1[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}}

}


};gdjs.levelFiveCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelFiveCode.GDcorrectWordTextObjects2);
gdjs.levelFiveCode.GDgameTileObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.levelFiveCode.GDcorrectWordTextObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDcorrectWordTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].returnVariable(gdjs.levelFiveCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "incorrectAnswerGenTimer") >= runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}
{ //Subevents
gdjs.levelFiveCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.levelFiveCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0.0065);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0.0095);
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gravityScaleTimer") >= 90;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() <= 0.015);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() + 0.0005);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 0.0008);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}}

}


};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects2});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects3});
gdjs.levelFiveCode.asyncCallback14906860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelFiveCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}{for(var i = 0, len = gdjs.levelFiveCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects3[i].returnVariable(gdjs.levelFiveCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() + 1);
}gdjs.levelFiveCode.localVariables.length = 0;
}
gdjs.levelFiveCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
for (const obj of gdjs.levelFiveCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFiveCode.asyncCallback14906860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects2});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelFiveCode.GDfooterObjects2});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelFiveCode.GDsplatObjects2});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects3});
gdjs.levelFiveCode.asyncCallback14912980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelFiveCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelFiveCode.GDsplatObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelFiveCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}{for(var i = 0, len = gdjs.levelFiveCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects3[i].returnVariable(gdjs.levelFiveCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}gdjs.levelFiveCode.localVariables.length = 0;
}
gdjs.levelFiveCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
for (const obj of gdjs.levelFiveCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
for (const obj of gdjs.levelFiveCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFiveCode.asyncCallback14912980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects2});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelFiveCode.GDfooterObjects2});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelFiveCode.GDsplatObjects2});
gdjs.levelFiveCode.asyncCallback14918300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelFiveCode.GDsplatObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelFiveCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelFiveCode.localVariables.length = 0;
}
gdjs.levelFiveCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
for (const obj of gdjs.levelFiveCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFiveCode.asyncCallback14918300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects1});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDfooterObjects1Objects = Hashtable.newFrom({"footer": gdjs.levelFiveCode.GDfooterObjects1});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects1Objects = Hashtable.newFrom({"splat": gdjs.levelFiveCode.GDsplatObjects1});
gdjs.levelFiveCode.asyncCallback14921284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelFiveCode.GDsplatObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelFiveCode.GDsplatObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDsplatObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.levelFiveCode.localVariables.length = 0;
}
gdjs.levelFiveCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
for (const obj of gdjs.levelFiveCode.GDsplatObjects1) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFiveCode.asyncCallback14921284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFiveCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFiveCode.GDgameTileObjects2[k] = gdjs.levelFiveCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFiveCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].returnVariable(gdjs.levelFiveCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelFiveCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelFiveCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelFiveCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelFiveCode.GDgameTileObjects2[k] = gdjs.levelFiveCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFiveCode.GDgameTileObjects2[k] = gdjs.levelFiveCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFiveCode.GDgameTileObjects2 */
gdjs.levelFiveCode.GDsplatObjects2.length = 0;

{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].returnVariable(gdjs.levelFiveCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects2Objects, (( gdjs.levelFiveCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelFiveCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelFiveCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelFiveCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelFiveCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelFiveCode.GDgameTileObjects2[k] = gdjs.levelFiveCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFiveCode.GDgameTileObjects2[k] = gdjs.levelFiveCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFiveCode.GDgameTileObjects2 */
gdjs.levelFiveCode.GDsplatObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects2Objects, (( gdjs.levelFiveCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelFiveCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelFiveCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelFiveCode.GDfooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects1Objects, "Physics2", gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDfooterObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelFiveCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.levelFiveCode.GDgameTileObjects1[k] = gdjs.levelFiveCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFiveCode.GDgameTileObjects1 */
gdjs.levelFiveCode.GDsplatObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects1Objects, (( gdjs.levelFiveCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects1[0].getPointX("")), (( gdjs.levelFiveCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelFiveCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.levelFiveCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Level 5");
}{runtimeScene.getGame().getVariables().getFromIndex(20).setString("levelFive");
}{runtimeScene.getGame().getVariables().getFromIndex(21).setString("levelSix");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 24);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelFinishedScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(31).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelFailedScreen", false);
}}

}


};gdjs.levelFiveCode.eventsList11 = function(runtimeScene) {

{

gdjs.levelFiveCode.GDgameTileObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelFiveCode.GDgameTileObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects2[i].getX() > 532 ) {
        isConditionTrue_1 = true;
        gdjs.levelFiveCode.GDgameTileObjects2[k] = gdjs.levelFiveCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelFiveCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelFiveCode.GDgameTileObjects1_1final.indexOf(gdjs.levelFiveCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelFiveCode.GDgameTileObjects1_1final.push(gdjs.levelFiveCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects2[i].getX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.levelFiveCode.GDgameTileObjects2[k] = gdjs.levelFiveCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelFiveCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelFiveCode.GDgameTileObjects1_1final.indexOf(gdjs.levelFiveCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelFiveCode.GDgameTileObjects1_1final.push(gdjs.levelFiveCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelFiveCode.GDgameTileObjects1_1final, gdjs.levelFiveCode.GDgameTileObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFiveCode.GDgameTileObjects1 */
{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects1[i].setPosition(gdjs.randomInRange(0, 532),-(188));
}
}}

}


};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelFiveCode.GDgameTileObjects1});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelFiveCode.GDsplatObjects2});
gdjs.levelFiveCode.asyncCallback14930644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelFiveCode.GDsplatObjects3);

{for(var i = 0, len = gdjs.levelFiveCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelFiveCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelFiveCode.localVariables.length = 0;
}
gdjs.levelFiveCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
for (const obj of gdjs.levelFiveCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFiveCode.asyncCallback14930644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFiveCode.asyncCallback14929380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects2);

gdjs.levelFiveCode.GDsplatObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDsplatObjects2Objects, (( gdjs.levelFiveCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelFiveCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelFiveCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.levelFiveCode.localVariables.length = 0;
}
gdjs.levelFiveCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.levelFiveCode.GDgameTileObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFiveCode.localVariables);
for (const obj of gdjs.levelFiveCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((1070 - (( gdjs.levelFiveCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelFiveCode.GDgameTileObjects1[0].getPointY(""))) / 2140), (runtimeScene) => (gdjs.levelFiveCode.asyncCallback14929380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFiveCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFiveCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDgameTileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFiveCode.GDgameTileObjects1.length;i<l;++i) {
    if ( gdjs.levelFiveCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() != runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFiveCode.GDgameTileObjects1[k] = gdjs.levelFiveCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelFiveCode.GDgameTileObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFiveCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDgameTileObjects1[i].getBehavior("Tween").addObjectPositionYTween2("incorrectSlam", 1070, "linear", (1070 - (gdjs.levelFiveCode.GDgameTileObjects1[i].getPointY(""))) / 2140, false);
}
}
{ //Subevents
gdjs.levelFiveCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.levelFiveCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star3"), gdjs.levelFiveCode.GDstar3Objects2);
{for(var i = 0, len = gdjs.levelFiveCode.GDstar3Objects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDstar3Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.levelFiveCode.GDstar2Objects2);
{for(var i = 0, len = gdjs.levelFiveCode.GDstar2Objects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDstar2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.levelFiveCode.GDstar1Objects1);
{for(var i = 0, len = gdjs.levelFiveCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDstar1Objects1[i].hide();
}
}}

}


};gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDbackButtonObjects2Objects = Hashtable.newFrom({"backButton": gdjs.levelFiveCode.GDbackButtonObjects2});
gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDpauseButtonObjects2Objects = Hashtable.newFrom({"pauseButton": gdjs.levelFiveCode.GDpauseButtonObjects2});
gdjs.levelFiveCode.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelFiveCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelFiveCode.GDpauseWordObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(24);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{for(var i = 0, len = gdjs.levelFiveCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDPauseScreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDpauseWordObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDPauseScreenObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answersNeededText"), gdjs.levelFiveCode.GDanswersNeededTextObjects2);
{for(var i = 0, len = gdjs.levelFiveCode.GDanswersNeededTextObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDanswersNeededTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.levelFiveCode.GDbackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDbackButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseButton"), gdjs.levelFiveCode.GDpauseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFiveCode.mapOfGDgdjs_9546levelFiveCode_9546GDpauseButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelFiveCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelFiveCode.GDpauseWordObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.levelFiveCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDpauseWordObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelFiveCode.GDPauseScreenObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelFiveCode.GDPauseScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelFiveCode.GDpauseWordObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.levelFiveCode.GDpauseWordObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDpauseWordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.levelFiveCode.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.levelFiveCode.GDPauseScreenObjects1[i].hide();
}
}}

}


};gdjs.levelFiveCode.eventsList17 = function(runtimeScene) {

{



}


{


gdjs.levelFiveCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.levelFiveCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.levelFiveCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.levelFiveCode.eventsList9(runtimeScene);
}


{



}


{


gdjs.levelFiveCode.eventsList10(runtimeScene);
}


{


gdjs.levelFiveCode.eventsList11(runtimeScene);
}


{


gdjs.levelFiveCode.eventsList14(runtimeScene);
}


{


gdjs.levelFiveCode.eventsList15(runtimeScene);
}


{



}


{


gdjs.levelFiveCode.eventsList16(runtimeScene);
}


};

gdjs.levelFiveCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelFiveCode.GDNewTextObjects1.length = 0;
gdjs.levelFiveCode.GDNewTextObjects2.length = 0;
gdjs.levelFiveCode.GDNewTextObjects3.length = 0;
gdjs.levelFiveCode.GDNewText2Objects1.length = 0;
gdjs.levelFiveCode.GDNewText2Objects2.length = 0;
gdjs.levelFiveCode.GDNewText2Objects3.length = 0;
gdjs.levelFiveCode.GDNewText3Objects1.length = 0;
gdjs.levelFiveCode.GDNewText3Objects2.length = 0;
gdjs.levelFiveCode.GDNewText3Objects3.length = 0;
gdjs.levelFiveCode.GDgameTileObjects1.length = 0;
gdjs.levelFiveCode.GDgameTileObjects2.length = 0;
gdjs.levelFiveCode.GDgameTileObjects3.length = 0;
gdjs.levelFiveCode.GDsplatObjects1.length = 0;
gdjs.levelFiveCode.GDsplatObjects2.length = 0;
gdjs.levelFiveCode.GDsplatObjects3.length = 0;
gdjs.levelFiveCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelFiveCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelFiveCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelFiveCode.GDfooterObjects1.length = 0;
gdjs.levelFiveCode.GDfooterObjects2.length = 0;
gdjs.levelFiveCode.GDfooterObjects3.length = 0;
gdjs.levelFiveCode.GDbackgroundObjects1.length = 0;
gdjs.levelFiveCode.GDbackgroundObjects2.length = 0;
gdjs.levelFiveCode.GDbackgroundObjects3.length = 0;
gdjs.levelFiveCode.GDbackButtonObjects1.length = 0;
gdjs.levelFiveCode.GDbackButtonObjects2.length = 0;
gdjs.levelFiveCode.GDbackButtonObjects3.length = 0;
gdjs.levelFiveCode.GDpauseButtonObjects1.length = 0;
gdjs.levelFiveCode.GDpauseButtonObjects2.length = 0;
gdjs.levelFiveCode.GDpauseButtonObjects3.length = 0;
gdjs.levelFiveCode.GDstarHolderObjects1.length = 0;
gdjs.levelFiveCode.GDstarHolderObjects2.length = 0;
gdjs.levelFiveCode.GDstarHolderObjects3.length = 0;
gdjs.levelFiveCode.GDstar1Objects1.length = 0;
gdjs.levelFiveCode.GDstar1Objects2.length = 0;
gdjs.levelFiveCode.GDstar1Objects3.length = 0;
gdjs.levelFiveCode.GDstar2Objects1.length = 0;
gdjs.levelFiveCode.GDstar2Objects2.length = 0;
gdjs.levelFiveCode.GDstar2Objects3.length = 0;
gdjs.levelFiveCode.GDstar3Objects1.length = 0;
gdjs.levelFiveCode.GDstar3Objects2.length = 0;
gdjs.levelFiveCode.GDstar3Objects3.length = 0;
gdjs.levelFiveCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelFiveCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelFiveCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelFiveCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelFiveCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelFiveCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelFiveCode.GDpauseWordObjects1.length = 0;
gdjs.levelFiveCode.GDpauseWordObjects2.length = 0;
gdjs.levelFiveCode.GDpauseWordObjects3.length = 0;
gdjs.levelFiveCode.GDPauseScreenObjects1.length = 0;
gdjs.levelFiveCode.GDPauseScreenObjects2.length = 0;
gdjs.levelFiveCode.GDPauseScreenObjects3.length = 0;
gdjs.levelFiveCode.GDCloudObjects1.length = 0;
gdjs.levelFiveCode.GDCloudObjects2.length = 0;
gdjs.levelFiveCode.GDCloudObjects3.length = 0;
gdjs.levelFiveCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelFiveCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelFiveCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects3.length = 0;
gdjs.levelFiveCode.GDquestionMarkObjects1.length = 0;
gdjs.levelFiveCode.GDquestionMarkObjects2.length = 0;
gdjs.levelFiveCode.GDquestionMarkObjects3.length = 0;

gdjs.levelFiveCode.eventsList17(runtimeScene);
gdjs.levelFiveCode.GDNewTextObjects1.length = 0;
gdjs.levelFiveCode.GDNewTextObjects2.length = 0;
gdjs.levelFiveCode.GDNewTextObjects3.length = 0;
gdjs.levelFiveCode.GDNewText2Objects1.length = 0;
gdjs.levelFiveCode.GDNewText2Objects2.length = 0;
gdjs.levelFiveCode.GDNewText2Objects3.length = 0;
gdjs.levelFiveCode.GDNewText3Objects1.length = 0;
gdjs.levelFiveCode.GDNewText3Objects2.length = 0;
gdjs.levelFiveCode.GDNewText3Objects3.length = 0;
gdjs.levelFiveCode.GDgameTileObjects1.length = 0;
gdjs.levelFiveCode.GDgameTileObjects2.length = 0;
gdjs.levelFiveCode.GDgameTileObjects3.length = 0;
gdjs.levelFiveCode.GDsplatObjects1.length = 0;
gdjs.levelFiveCode.GDsplatObjects2.length = 0;
gdjs.levelFiveCode.GDsplatObjects3.length = 0;
gdjs.levelFiveCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelFiveCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelFiveCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelFiveCode.GDfooterObjects1.length = 0;
gdjs.levelFiveCode.GDfooterObjects2.length = 0;
gdjs.levelFiveCode.GDfooterObjects3.length = 0;
gdjs.levelFiveCode.GDbackgroundObjects1.length = 0;
gdjs.levelFiveCode.GDbackgroundObjects2.length = 0;
gdjs.levelFiveCode.GDbackgroundObjects3.length = 0;
gdjs.levelFiveCode.GDbackButtonObjects1.length = 0;
gdjs.levelFiveCode.GDbackButtonObjects2.length = 0;
gdjs.levelFiveCode.GDbackButtonObjects3.length = 0;
gdjs.levelFiveCode.GDpauseButtonObjects1.length = 0;
gdjs.levelFiveCode.GDpauseButtonObjects2.length = 0;
gdjs.levelFiveCode.GDpauseButtonObjects3.length = 0;
gdjs.levelFiveCode.GDstarHolderObjects1.length = 0;
gdjs.levelFiveCode.GDstarHolderObjects2.length = 0;
gdjs.levelFiveCode.GDstarHolderObjects3.length = 0;
gdjs.levelFiveCode.GDstar1Objects1.length = 0;
gdjs.levelFiveCode.GDstar1Objects2.length = 0;
gdjs.levelFiveCode.GDstar1Objects3.length = 0;
gdjs.levelFiveCode.GDstar2Objects1.length = 0;
gdjs.levelFiveCode.GDstar2Objects2.length = 0;
gdjs.levelFiveCode.GDstar2Objects3.length = 0;
gdjs.levelFiveCode.GDstar3Objects1.length = 0;
gdjs.levelFiveCode.GDstar3Objects2.length = 0;
gdjs.levelFiveCode.GDstar3Objects3.length = 0;
gdjs.levelFiveCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelFiveCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelFiveCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelFiveCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelFiveCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelFiveCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelFiveCode.GDpauseWordObjects1.length = 0;
gdjs.levelFiveCode.GDpauseWordObjects2.length = 0;
gdjs.levelFiveCode.GDpauseWordObjects3.length = 0;
gdjs.levelFiveCode.GDPauseScreenObjects1.length = 0;
gdjs.levelFiveCode.GDPauseScreenObjects2.length = 0;
gdjs.levelFiveCode.GDPauseScreenObjects3.length = 0;
gdjs.levelFiveCode.GDCloudObjects1.length = 0;
gdjs.levelFiveCode.GDCloudObjects2.length = 0;
gdjs.levelFiveCode.GDCloudObjects3.length = 0;
gdjs.levelFiveCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelFiveCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelFiveCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelFiveCode.GDLevelSixheaderTimerObjects3.length = 0;
gdjs.levelFiveCode.GDquestionMarkObjects1.length = 0;
gdjs.levelFiveCode.GDquestionMarkObjects2.length = 0;
gdjs.levelFiveCode.GDquestionMarkObjects3.length = 0;


return;

}

gdjs['levelFiveCode'] = gdjs.levelFiveCode;

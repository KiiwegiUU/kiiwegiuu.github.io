gdjs.levelTwoCode = {};
gdjs.levelTwoCode.localVariables = [];
gdjs.levelTwoCode.GDgameTileObjects1_1final = [];

gdjs.levelTwoCode.GDNewTextObjects1= [];
gdjs.levelTwoCode.GDNewTextObjects2= [];
gdjs.levelTwoCode.GDNewTextObjects3= [];
gdjs.levelTwoCode.GDNewText2Objects1= [];
gdjs.levelTwoCode.GDNewText2Objects2= [];
gdjs.levelTwoCode.GDNewText2Objects3= [];
gdjs.levelTwoCode.GDNewText3Objects1= [];
gdjs.levelTwoCode.GDNewText3Objects2= [];
gdjs.levelTwoCode.GDNewText3Objects3= [];
gdjs.levelTwoCode.GDgameTileObjects1= [];
gdjs.levelTwoCode.GDgameTileObjects2= [];
gdjs.levelTwoCode.GDgameTileObjects3= [];
gdjs.levelTwoCode.GDsplatObjects1= [];
gdjs.levelTwoCode.GDsplatObjects2= [];
gdjs.levelTwoCode.GDsplatObjects3= [];
gdjs.levelTwoCode.GDincorrectAnswerObjects1= [];
gdjs.levelTwoCode.GDincorrectAnswerObjects2= [];
gdjs.levelTwoCode.GDincorrectAnswerObjects3= [];
gdjs.levelTwoCode.GDfooterObjects1= [];
gdjs.levelTwoCode.GDfooterObjects2= [];
gdjs.levelTwoCode.GDfooterObjects3= [];
gdjs.levelTwoCode.GDbackgroundObjects1= [];
gdjs.levelTwoCode.GDbackgroundObjects2= [];
gdjs.levelTwoCode.GDbackgroundObjects3= [];
gdjs.levelTwoCode.GDbackButtonObjects1= [];
gdjs.levelTwoCode.GDbackButtonObjects2= [];
gdjs.levelTwoCode.GDbackButtonObjects3= [];
gdjs.levelTwoCode.GDpauseButtonObjects1= [];
gdjs.levelTwoCode.GDpauseButtonObjects2= [];
gdjs.levelTwoCode.GDpauseButtonObjects3= [];
gdjs.levelTwoCode.GDstarHolderObjects1= [];
gdjs.levelTwoCode.GDstarHolderObjects2= [];
gdjs.levelTwoCode.GDstarHolderObjects3= [];
gdjs.levelTwoCode.GDstar1Objects1= [];
gdjs.levelTwoCode.GDstar1Objects2= [];
gdjs.levelTwoCode.GDstar1Objects3= [];
gdjs.levelTwoCode.GDstar2Objects1= [];
gdjs.levelTwoCode.GDstar2Objects2= [];
gdjs.levelTwoCode.GDstar2Objects3= [];
gdjs.levelTwoCode.GDstar3Objects1= [];
gdjs.levelTwoCode.GDstar3Objects2= [];
gdjs.levelTwoCode.GDstar3Objects3= [];
gdjs.levelTwoCode.GDcorrectWordTextObjects1= [];
gdjs.levelTwoCode.GDcorrectWordTextObjects2= [];
gdjs.levelTwoCode.GDcorrectWordTextObjects3= [];
gdjs.levelTwoCode.GDanswersNeededTextObjects1= [];
gdjs.levelTwoCode.GDanswersNeededTextObjects2= [];
gdjs.levelTwoCode.GDanswersNeededTextObjects3= [];
gdjs.levelTwoCode.GDpauseWordObjects1= [];
gdjs.levelTwoCode.GDpauseWordObjects2= [];
gdjs.levelTwoCode.GDpauseWordObjects3= [];
gdjs.levelTwoCode.GDPauseScreenObjects1= [];
gdjs.levelTwoCode.GDPauseScreenObjects2= [];
gdjs.levelTwoCode.GDPauseScreenObjects3= [];
gdjs.levelTwoCode.GDCloudObjects1= [];
gdjs.levelTwoCode.GDCloudObjects2= [];
gdjs.levelTwoCode.GDCloudObjects3= [];
gdjs.levelTwoCode.GDLevelSixTimeObjects1= [];
gdjs.levelTwoCode.GDLevelSixTimeObjects2= [];
gdjs.levelTwoCode.GDLevelSixTimeObjects3= [];
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects1= [];
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects2= [];
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects3= [];
gdjs.levelTwoCode.GDquestionMarkObjects1= [];
gdjs.levelTwoCode.GDquestionMarkObjects2= [];
gdjs.levelTwoCode.GDquestionMarkObjects3= [];


gdjs.levelTwoCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(gdjs.randomInRange(7, 9));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "generationRateIncreaser") >= 10;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() / 1.005);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}}

}


};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects2});
gdjs.levelTwoCode.eventsList1 = function(runtimeScene) {

};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects1});
gdjs.levelTwoCode.eventsList2 = function(runtimeScene) {

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
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
{ //Subevents: 
gdjs.levelTwoCode.eventsList1(runtimeScene);} //Subevents end.
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
gdjs.levelTwoCode.GDgameTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects1Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects1[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}}

}


};gdjs.levelTwoCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelTwoCode.GDcorrectWordTextObjects2);
gdjs.levelTwoCode.GDgameTileObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.levelTwoCode.GDcorrectWordTextObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDcorrectWordTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].returnVariable(gdjs.levelTwoCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
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
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}
{ //Subevents
gdjs.levelTwoCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.levelTwoCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0.0035);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0.004);
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() <= 0.0065);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() + 0.0005);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 0.0008);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}}

}


};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects2});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects3});
gdjs.levelTwoCode.asyncCallback14694540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelTwoCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}{for(var i = 0, len = gdjs.levelTwoCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects3[i].returnVariable(gdjs.levelTwoCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() + 1);
}gdjs.levelTwoCode.localVariables.length = 0;
}
gdjs.levelTwoCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
for (const obj of gdjs.levelTwoCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelTwoCode.asyncCallback14694540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects2});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelTwoCode.GDfooterObjects2});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelTwoCode.GDsplatObjects2});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects3});
gdjs.levelTwoCode.asyncCallback14700660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelTwoCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelTwoCode.GDsplatObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelTwoCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}{for(var i = 0, len = gdjs.levelTwoCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects3[i].returnVariable(gdjs.levelTwoCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}gdjs.levelTwoCode.localVariables.length = 0;
}
gdjs.levelTwoCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
for (const obj of gdjs.levelTwoCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
for (const obj of gdjs.levelTwoCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelTwoCode.asyncCallback14700660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects2});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelTwoCode.GDfooterObjects2});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelTwoCode.GDsplatObjects2});
gdjs.levelTwoCode.asyncCallback14705980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelTwoCode.GDsplatObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelTwoCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelTwoCode.localVariables.length = 0;
}
gdjs.levelTwoCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
for (const obj of gdjs.levelTwoCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelTwoCode.asyncCallback14705980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects1});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDfooterObjects1Objects = Hashtable.newFrom({"footer": gdjs.levelTwoCode.GDfooterObjects1});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects1Objects = Hashtable.newFrom({"splat": gdjs.levelTwoCode.GDsplatObjects1});
gdjs.levelTwoCode.asyncCallback14708964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelTwoCode.GDsplatObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelTwoCode.GDsplatObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDsplatObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.levelTwoCode.localVariables.length = 0;
}
gdjs.levelTwoCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
for (const obj of gdjs.levelTwoCode.GDsplatObjects1) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelTwoCode.asyncCallback14708964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelTwoCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelTwoCode.GDgameTileObjects2[k] = gdjs.levelTwoCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelTwoCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].returnVariable(gdjs.levelTwoCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelTwoCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelTwoCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelTwoCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelTwoCode.GDgameTileObjects2[k] = gdjs.levelTwoCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelTwoCode.GDgameTileObjects2[k] = gdjs.levelTwoCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelTwoCode.GDgameTileObjects2 */
gdjs.levelTwoCode.GDsplatObjects2.length = 0;

{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].returnVariable(gdjs.levelTwoCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects2Objects, (( gdjs.levelTwoCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelTwoCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelTwoCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelTwoCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelTwoCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelTwoCode.GDgameTileObjects2[k] = gdjs.levelTwoCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelTwoCode.GDgameTileObjects2[k] = gdjs.levelTwoCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelTwoCode.GDgameTileObjects2 */
gdjs.levelTwoCode.GDsplatObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects2Objects, (( gdjs.levelTwoCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelTwoCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelTwoCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelTwoCode.GDfooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects1Objects, "Physics2", gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDfooterObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelTwoCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.levelTwoCode.GDgameTileObjects1[k] = gdjs.levelTwoCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelTwoCode.GDgameTileObjects1 */
gdjs.levelTwoCode.GDsplatObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects1Objects, (( gdjs.levelTwoCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects1[0].getPointX("")), (( gdjs.levelTwoCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelTwoCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.levelTwoCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Level 2");
}{runtimeScene.getGame().getVariables().getFromIndex(20).setString("levelTwo");
}{runtimeScene.getGame().getVariables().getFromIndex(21).setString("levelThree");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 12);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelFinishedScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(28).setBoolean(true);
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


};gdjs.levelTwoCode.eventsList11 = function(runtimeScene) {

{

gdjs.levelTwoCode.GDgameTileObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelTwoCode.GDgameTileObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects2[i].getX() > 532 ) {
        isConditionTrue_1 = true;
        gdjs.levelTwoCode.GDgameTileObjects2[k] = gdjs.levelTwoCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelTwoCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelTwoCode.GDgameTileObjects1_1final.indexOf(gdjs.levelTwoCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelTwoCode.GDgameTileObjects1_1final.push(gdjs.levelTwoCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects2[i].getX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.levelTwoCode.GDgameTileObjects2[k] = gdjs.levelTwoCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelTwoCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelTwoCode.GDgameTileObjects1_1final.indexOf(gdjs.levelTwoCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelTwoCode.GDgameTileObjects1_1final.push(gdjs.levelTwoCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelTwoCode.GDgameTileObjects1_1final, gdjs.levelTwoCode.GDgameTileObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelTwoCode.GDgameTileObjects1 */
{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects1[i].setPosition(gdjs.randomInRange(0, 532),-(188));
}
}}

}


};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelTwoCode.GDgameTileObjects1});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelTwoCode.GDsplatObjects2});
gdjs.levelTwoCode.asyncCallback14718340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelTwoCode.GDsplatObjects3);

{for(var i = 0, len = gdjs.levelTwoCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelTwoCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelTwoCode.localVariables.length = 0;
}
gdjs.levelTwoCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
for (const obj of gdjs.levelTwoCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelTwoCode.asyncCallback14718340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelTwoCode.asyncCallback14717076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects2);

gdjs.levelTwoCode.GDsplatObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDsplatObjects2Objects, (( gdjs.levelTwoCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelTwoCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelTwoCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.levelTwoCode.localVariables.length = 0;
}
gdjs.levelTwoCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.levelTwoCode.GDgameTileObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelTwoCode.localVariables);
for (const obj of gdjs.levelTwoCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((1070 - (( gdjs.levelTwoCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelTwoCode.GDgameTileObjects1[0].getPointY(""))) / 2140), (runtimeScene) => (gdjs.levelTwoCode.asyncCallback14717076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelTwoCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelTwoCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDgameTileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelTwoCode.GDgameTileObjects1.length;i<l;++i) {
    if ( gdjs.levelTwoCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() != runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelTwoCode.GDgameTileObjects1[k] = gdjs.levelTwoCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelTwoCode.GDgameTileObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelTwoCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDgameTileObjects1[i].getBehavior("Tween").addObjectPositionYTween2("incorrectSlam", 1070, "linear", (1070 - (gdjs.levelTwoCode.GDgameTileObjects1[i].getPointY(""))) / 2140, false);
}
}
{ //Subevents
gdjs.levelTwoCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.levelTwoCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star3"), gdjs.levelTwoCode.GDstar3Objects2);
{for(var i = 0, len = gdjs.levelTwoCode.GDstar3Objects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDstar3Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.levelTwoCode.GDstar2Objects2);
{for(var i = 0, len = gdjs.levelTwoCode.GDstar2Objects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDstar2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.levelTwoCode.GDstar1Objects1);
{for(var i = 0, len = gdjs.levelTwoCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDstar1Objects1[i].hide();
}
}}

}


};gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDbackButtonObjects2Objects = Hashtable.newFrom({"backButton": gdjs.levelTwoCode.GDbackButtonObjects2});
gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDpauseButtonObjects2Objects = Hashtable.newFrom({"pauseButton": gdjs.levelTwoCode.GDpauseButtonObjects2});
gdjs.levelTwoCode.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelTwoCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelTwoCode.GDpauseWordObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(12);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{for(var i = 0, len = gdjs.levelTwoCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDPauseScreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDpauseWordObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDPauseScreenObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answersNeededText"), gdjs.levelTwoCode.GDanswersNeededTextObjects2);
{for(var i = 0, len = gdjs.levelTwoCode.GDanswersNeededTextObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDanswersNeededTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.levelTwoCode.GDbackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDbackButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseButton"), gdjs.levelTwoCode.GDpauseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelTwoCode.mapOfGDgdjs_9546levelTwoCode_9546GDpauseButtonObjects2Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelTwoCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelTwoCode.GDpauseWordObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.levelTwoCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDpauseWordObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelTwoCode.GDPauseScreenObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelTwoCode.GDPauseScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelTwoCode.GDpauseWordObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.levelTwoCode.GDpauseWordObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDpauseWordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.levelTwoCode.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.levelTwoCode.GDPauseScreenObjects1[i].hide();
}
}}

}


};gdjs.levelTwoCode.eventsList17 = function(runtimeScene) {

{



}


{


gdjs.levelTwoCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.levelTwoCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.levelTwoCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.levelTwoCode.eventsList9(runtimeScene);
}


{



}


{


gdjs.levelTwoCode.eventsList10(runtimeScene);
}


{


gdjs.levelTwoCode.eventsList11(runtimeScene);
}


{


gdjs.levelTwoCode.eventsList14(runtimeScene);
}


{


gdjs.levelTwoCode.eventsList15(runtimeScene);
}


{



}


{


gdjs.levelTwoCode.eventsList16(runtimeScene);
}


};

gdjs.levelTwoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelTwoCode.GDNewTextObjects1.length = 0;
gdjs.levelTwoCode.GDNewTextObjects2.length = 0;
gdjs.levelTwoCode.GDNewTextObjects3.length = 0;
gdjs.levelTwoCode.GDNewText2Objects1.length = 0;
gdjs.levelTwoCode.GDNewText2Objects2.length = 0;
gdjs.levelTwoCode.GDNewText2Objects3.length = 0;
gdjs.levelTwoCode.GDNewText3Objects1.length = 0;
gdjs.levelTwoCode.GDNewText3Objects2.length = 0;
gdjs.levelTwoCode.GDNewText3Objects3.length = 0;
gdjs.levelTwoCode.GDgameTileObjects1.length = 0;
gdjs.levelTwoCode.GDgameTileObjects2.length = 0;
gdjs.levelTwoCode.GDgameTileObjects3.length = 0;
gdjs.levelTwoCode.GDsplatObjects1.length = 0;
gdjs.levelTwoCode.GDsplatObjects2.length = 0;
gdjs.levelTwoCode.GDsplatObjects3.length = 0;
gdjs.levelTwoCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelTwoCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelTwoCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelTwoCode.GDfooterObjects1.length = 0;
gdjs.levelTwoCode.GDfooterObjects2.length = 0;
gdjs.levelTwoCode.GDfooterObjects3.length = 0;
gdjs.levelTwoCode.GDbackgroundObjects1.length = 0;
gdjs.levelTwoCode.GDbackgroundObjects2.length = 0;
gdjs.levelTwoCode.GDbackgroundObjects3.length = 0;
gdjs.levelTwoCode.GDbackButtonObjects1.length = 0;
gdjs.levelTwoCode.GDbackButtonObjects2.length = 0;
gdjs.levelTwoCode.GDbackButtonObjects3.length = 0;
gdjs.levelTwoCode.GDpauseButtonObjects1.length = 0;
gdjs.levelTwoCode.GDpauseButtonObjects2.length = 0;
gdjs.levelTwoCode.GDpauseButtonObjects3.length = 0;
gdjs.levelTwoCode.GDstarHolderObjects1.length = 0;
gdjs.levelTwoCode.GDstarHolderObjects2.length = 0;
gdjs.levelTwoCode.GDstarHolderObjects3.length = 0;
gdjs.levelTwoCode.GDstar1Objects1.length = 0;
gdjs.levelTwoCode.GDstar1Objects2.length = 0;
gdjs.levelTwoCode.GDstar1Objects3.length = 0;
gdjs.levelTwoCode.GDstar2Objects1.length = 0;
gdjs.levelTwoCode.GDstar2Objects2.length = 0;
gdjs.levelTwoCode.GDstar2Objects3.length = 0;
gdjs.levelTwoCode.GDstar3Objects1.length = 0;
gdjs.levelTwoCode.GDstar3Objects2.length = 0;
gdjs.levelTwoCode.GDstar3Objects3.length = 0;
gdjs.levelTwoCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelTwoCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelTwoCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelTwoCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelTwoCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelTwoCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelTwoCode.GDpauseWordObjects1.length = 0;
gdjs.levelTwoCode.GDpauseWordObjects2.length = 0;
gdjs.levelTwoCode.GDpauseWordObjects3.length = 0;
gdjs.levelTwoCode.GDPauseScreenObjects1.length = 0;
gdjs.levelTwoCode.GDPauseScreenObjects2.length = 0;
gdjs.levelTwoCode.GDPauseScreenObjects3.length = 0;
gdjs.levelTwoCode.GDCloudObjects1.length = 0;
gdjs.levelTwoCode.GDCloudObjects2.length = 0;
gdjs.levelTwoCode.GDCloudObjects3.length = 0;
gdjs.levelTwoCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelTwoCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelTwoCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects3.length = 0;
gdjs.levelTwoCode.GDquestionMarkObjects1.length = 0;
gdjs.levelTwoCode.GDquestionMarkObjects2.length = 0;
gdjs.levelTwoCode.GDquestionMarkObjects3.length = 0;

gdjs.levelTwoCode.eventsList17(runtimeScene);
gdjs.levelTwoCode.GDNewTextObjects1.length = 0;
gdjs.levelTwoCode.GDNewTextObjects2.length = 0;
gdjs.levelTwoCode.GDNewTextObjects3.length = 0;
gdjs.levelTwoCode.GDNewText2Objects1.length = 0;
gdjs.levelTwoCode.GDNewText2Objects2.length = 0;
gdjs.levelTwoCode.GDNewText2Objects3.length = 0;
gdjs.levelTwoCode.GDNewText3Objects1.length = 0;
gdjs.levelTwoCode.GDNewText3Objects2.length = 0;
gdjs.levelTwoCode.GDNewText3Objects3.length = 0;
gdjs.levelTwoCode.GDgameTileObjects1.length = 0;
gdjs.levelTwoCode.GDgameTileObjects2.length = 0;
gdjs.levelTwoCode.GDgameTileObjects3.length = 0;
gdjs.levelTwoCode.GDsplatObjects1.length = 0;
gdjs.levelTwoCode.GDsplatObjects2.length = 0;
gdjs.levelTwoCode.GDsplatObjects3.length = 0;
gdjs.levelTwoCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelTwoCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelTwoCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelTwoCode.GDfooterObjects1.length = 0;
gdjs.levelTwoCode.GDfooterObjects2.length = 0;
gdjs.levelTwoCode.GDfooterObjects3.length = 0;
gdjs.levelTwoCode.GDbackgroundObjects1.length = 0;
gdjs.levelTwoCode.GDbackgroundObjects2.length = 0;
gdjs.levelTwoCode.GDbackgroundObjects3.length = 0;
gdjs.levelTwoCode.GDbackButtonObjects1.length = 0;
gdjs.levelTwoCode.GDbackButtonObjects2.length = 0;
gdjs.levelTwoCode.GDbackButtonObjects3.length = 0;
gdjs.levelTwoCode.GDpauseButtonObjects1.length = 0;
gdjs.levelTwoCode.GDpauseButtonObjects2.length = 0;
gdjs.levelTwoCode.GDpauseButtonObjects3.length = 0;
gdjs.levelTwoCode.GDstarHolderObjects1.length = 0;
gdjs.levelTwoCode.GDstarHolderObjects2.length = 0;
gdjs.levelTwoCode.GDstarHolderObjects3.length = 0;
gdjs.levelTwoCode.GDstar1Objects1.length = 0;
gdjs.levelTwoCode.GDstar1Objects2.length = 0;
gdjs.levelTwoCode.GDstar1Objects3.length = 0;
gdjs.levelTwoCode.GDstar2Objects1.length = 0;
gdjs.levelTwoCode.GDstar2Objects2.length = 0;
gdjs.levelTwoCode.GDstar2Objects3.length = 0;
gdjs.levelTwoCode.GDstar3Objects1.length = 0;
gdjs.levelTwoCode.GDstar3Objects2.length = 0;
gdjs.levelTwoCode.GDstar3Objects3.length = 0;
gdjs.levelTwoCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelTwoCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelTwoCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelTwoCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelTwoCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelTwoCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelTwoCode.GDpauseWordObjects1.length = 0;
gdjs.levelTwoCode.GDpauseWordObjects2.length = 0;
gdjs.levelTwoCode.GDpauseWordObjects3.length = 0;
gdjs.levelTwoCode.GDPauseScreenObjects1.length = 0;
gdjs.levelTwoCode.GDPauseScreenObjects2.length = 0;
gdjs.levelTwoCode.GDPauseScreenObjects3.length = 0;
gdjs.levelTwoCode.GDCloudObjects1.length = 0;
gdjs.levelTwoCode.GDCloudObjects2.length = 0;
gdjs.levelTwoCode.GDCloudObjects3.length = 0;
gdjs.levelTwoCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelTwoCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelTwoCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelTwoCode.GDLevelSixheaderTimerObjects3.length = 0;
gdjs.levelTwoCode.GDquestionMarkObjects1.length = 0;
gdjs.levelTwoCode.GDquestionMarkObjects2.length = 0;
gdjs.levelTwoCode.GDquestionMarkObjects3.length = 0;


return;

}

gdjs['levelTwoCode'] = gdjs.levelTwoCode;

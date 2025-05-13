gdjs.levelSixCode = {};
gdjs.levelSixCode.localVariables = [];
gdjs.levelSixCode.GDgameTileObjects1_1final = [];

gdjs.levelSixCode.GDNewTextObjects1= [];
gdjs.levelSixCode.GDNewTextObjects2= [];
gdjs.levelSixCode.GDNewTextObjects3= [];
gdjs.levelSixCode.GDNewText2Objects1= [];
gdjs.levelSixCode.GDNewText2Objects2= [];
gdjs.levelSixCode.GDNewText2Objects3= [];
gdjs.levelSixCode.GDNewText3Objects1= [];
gdjs.levelSixCode.GDNewText3Objects2= [];
gdjs.levelSixCode.GDNewText3Objects3= [];
gdjs.levelSixCode.GDgameTileObjects1= [];
gdjs.levelSixCode.GDgameTileObjects2= [];
gdjs.levelSixCode.GDgameTileObjects3= [];
gdjs.levelSixCode.GDsplatObjects1= [];
gdjs.levelSixCode.GDsplatObjects2= [];
gdjs.levelSixCode.GDsplatObjects3= [];
gdjs.levelSixCode.GDincorrectAnswerObjects1= [];
gdjs.levelSixCode.GDincorrectAnswerObjects2= [];
gdjs.levelSixCode.GDincorrectAnswerObjects3= [];
gdjs.levelSixCode.GDfooterObjects1= [];
gdjs.levelSixCode.GDfooterObjects2= [];
gdjs.levelSixCode.GDfooterObjects3= [];
gdjs.levelSixCode.GDbackgroundObjects1= [];
gdjs.levelSixCode.GDbackgroundObjects2= [];
gdjs.levelSixCode.GDbackgroundObjects3= [];
gdjs.levelSixCode.GDbackButtonObjects1= [];
gdjs.levelSixCode.GDbackButtonObjects2= [];
gdjs.levelSixCode.GDbackButtonObjects3= [];
gdjs.levelSixCode.GDpauseButtonObjects1= [];
gdjs.levelSixCode.GDpauseButtonObjects2= [];
gdjs.levelSixCode.GDpauseButtonObjects3= [];
gdjs.levelSixCode.GDstarHolderObjects1= [];
gdjs.levelSixCode.GDstarHolderObjects2= [];
gdjs.levelSixCode.GDstarHolderObjects3= [];
gdjs.levelSixCode.GDstar1Objects1= [];
gdjs.levelSixCode.GDstar1Objects2= [];
gdjs.levelSixCode.GDstar1Objects3= [];
gdjs.levelSixCode.GDstar2Objects1= [];
gdjs.levelSixCode.GDstar2Objects2= [];
gdjs.levelSixCode.GDstar2Objects3= [];
gdjs.levelSixCode.GDstar3Objects1= [];
gdjs.levelSixCode.GDstar3Objects2= [];
gdjs.levelSixCode.GDstar3Objects3= [];
gdjs.levelSixCode.GDcorrectWordTextObjects1= [];
gdjs.levelSixCode.GDcorrectWordTextObjects2= [];
gdjs.levelSixCode.GDcorrectWordTextObjects3= [];
gdjs.levelSixCode.GDanswersNeededTextObjects1= [];
gdjs.levelSixCode.GDanswersNeededTextObjects2= [];
gdjs.levelSixCode.GDanswersNeededTextObjects3= [];
gdjs.levelSixCode.GDpauseWordObjects1= [];
gdjs.levelSixCode.GDpauseWordObjects2= [];
gdjs.levelSixCode.GDpauseWordObjects3= [];
gdjs.levelSixCode.GDPauseScreenObjects1= [];
gdjs.levelSixCode.GDPauseScreenObjects2= [];
gdjs.levelSixCode.GDPauseScreenObjects3= [];
gdjs.levelSixCode.GDCloudObjects1= [];
gdjs.levelSixCode.GDCloudObjects2= [];
gdjs.levelSixCode.GDCloudObjects3= [];
gdjs.levelSixCode.GDLevelSixTimeObjects1= [];
gdjs.levelSixCode.GDLevelSixTimeObjects2= [];
gdjs.levelSixCode.GDLevelSixTimeObjects3= [];
gdjs.levelSixCode.GDLevelSixheaderTimerObjects1= [];
gdjs.levelSixCode.GDLevelSixheaderTimerObjects2= [];
gdjs.levelSixCode.GDLevelSixheaderTimerObjects3= [];


gdjs.levelSixCode.eventsList0 = function(runtimeScene) {

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
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() / 1.12);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}}

}


};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects2});
gdjs.levelSixCode.eventsList1 = function(runtimeScene) {

};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects1});
gdjs.levelSixCode.eventsList2 = function(runtimeScene) {

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
gdjs.levelSixCode.eventsList1(runtimeScene);} //Subevents end.
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
gdjs.levelSixCode.GDgameTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects1Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects1[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}}

}


};gdjs.levelSixCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelSixCode.GDcorrectWordTextObjects2);
gdjs.levelSixCode.GDgameTileObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.levelSixCode.GDcorrectWordTextObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDcorrectWordTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].returnVariable(gdjs.levelSixCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
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
gdjs.levelSixCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.levelSixCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0.005);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0.015);
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gravityScaleTimer") >= 10;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() + 0.004);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 0.007);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}}

}


};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects2});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects3});
gdjs.levelSixCode.asyncCallback14309900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelSixCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelSixCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}{for(var i = 0, len = gdjs.levelSixCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects3[i].returnVariable(gdjs.levelSixCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() + 1);
}gdjs.levelSixCode.localVariables.length = 0;
}
gdjs.levelSixCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelSixCode.localVariables);
for (const obj of gdjs.levelSixCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelSixCode.asyncCallback14309900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects2});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelSixCode.GDfooterObjects2});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelSixCode.GDsplatObjects2});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects3});
gdjs.levelSixCode.asyncCallback14316228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelSixCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelSixCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelSixCode.GDsplatObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelSixCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}{for(var i = 0, len = gdjs.levelSixCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects3[i].returnVariable(gdjs.levelSixCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}gdjs.levelSixCode.localVariables.length = 0;
}
gdjs.levelSixCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelSixCode.localVariables);
for (const obj of gdjs.levelSixCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
for (const obj of gdjs.levelSixCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelSixCode.asyncCallback14316228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects2});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelSixCode.GDfooterObjects2});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelSixCode.GDsplatObjects2});
gdjs.levelSixCode.asyncCallback14321196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelSixCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelSixCode.GDsplatObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelSixCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelSixCode.localVariables.length = 0;
}
gdjs.levelSixCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelSixCode.localVariables);
for (const obj of gdjs.levelSixCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelSixCode.asyncCallback14321196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects1});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDfooterObjects1Objects = Hashtable.newFrom({"footer": gdjs.levelSixCode.GDfooterObjects1});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects1Objects = Hashtable.newFrom({"splat": gdjs.levelSixCode.GDsplatObjects1});
gdjs.levelSixCode.asyncCallback14324716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelSixCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelSixCode.GDsplatObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelSixCode.GDsplatObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDsplatObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.levelSixCode.localVariables.length = 0;
}
gdjs.levelSixCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelSixCode.localVariables);
for (const obj of gdjs.levelSixCode.GDsplatObjects1) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelSixCode.asyncCallback14324716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelSixCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelSixCode.GDgameTileObjects2[k] = gdjs.levelSixCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelSixCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].returnVariable(gdjs.levelSixCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelSixCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelSixCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelSixCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelSixCode.GDgameTileObjects2[k] = gdjs.levelSixCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelSixCode.GDgameTileObjects2[k] = gdjs.levelSixCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelSixCode.GDgameTileObjects2 */
gdjs.levelSixCode.GDsplatObjects2.length = 0;

{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].returnVariable(gdjs.levelSixCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects2Objects, (( gdjs.levelSixCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelSixCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelSixCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelSixCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelSixCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelSixCode.GDgameTileObjects2[k] = gdjs.levelSixCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelSixCode.GDgameTileObjects2[k] = gdjs.levelSixCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelSixCode.GDgameTileObjects2 */
gdjs.levelSixCode.GDsplatObjects2.length = 0;

{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].activateBehavior("Physics2", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects2Objects, (( gdjs.levelSixCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelSixCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelSixCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelSixCode.GDfooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects1Objects, "Physics2", gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDfooterObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelSixCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.levelSixCode.GDgameTileObjects1[k] = gdjs.levelSixCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelSixCode.GDgameTileObjects1 */
gdjs.levelSixCode.GDsplatObjects1.length = 0;

{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects1[i].activateBehavior("Physics2", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects1Objects, (( gdjs.levelSixCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects1[0].getPointX("")), (( gdjs.levelSixCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelSixCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.levelSixCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Level 6");
}{runtimeScene.getGame().getVariables().getFromIndex(20).setString("levelSix");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}}

}


};gdjs.levelSixCode.eventsList11 = function(runtimeScene) {

{

gdjs.levelSixCode.GDgameTileObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelSixCode.GDgameTileObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects2[i].getX() > 532 ) {
        isConditionTrue_1 = true;
        gdjs.levelSixCode.GDgameTileObjects2[k] = gdjs.levelSixCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelSixCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelSixCode.GDgameTileObjects1_1final.indexOf(gdjs.levelSixCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelSixCode.GDgameTileObjects1_1final.push(gdjs.levelSixCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects2[i].getX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.levelSixCode.GDgameTileObjects2[k] = gdjs.levelSixCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelSixCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelSixCode.GDgameTileObjects1_1final.indexOf(gdjs.levelSixCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelSixCode.GDgameTileObjects1_1final.push(gdjs.levelSixCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelSixCode.GDgameTileObjects1_1final, gdjs.levelSixCode.GDgameTileObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelSixCode.GDgameTileObjects1 */
{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects1[i].setPosition(gdjs.randomInRange(0, 532),gdjs.randomInRange(-(188), -(376)));
}
}}

}


};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelSixCode.GDgameTileObjects1});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelSixCode.GDsplatObjects2});
gdjs.levelSixCode.asyncCallback14333012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelSixCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelSixCode.GDsplatObjects3);

{for(var i = 0, len = gdjs.levelSixCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelSixCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelSixCode.localVariables.length = 0;
}
gdjs.levelSixCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelSixCode.localVariables);
for (const obj of gdjs.levelSixCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelSixCode.asyncCallback14333012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelSixCode.asyncCallback14331876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelSixCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects2);

gdjs.levelSixCode.GDsplatObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDsplatObjects2Objects, (( gdjs.levelSixCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelSixCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelSixCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.levelSixCode.localVariables.length = 0;
}
gdjs.levelSixCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.levelSixCode.GDgameTileObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelSixCode.localVariables);
for (const obj of gdjs.levelSixCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((1070 - (( gdjs.levelSixCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelSixCode.GDgameTileObjects1[0].getPointY(""))) / 2140), (runtimeScene) => (gdjs.levelSixCode.asyncCallback14331876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelSixCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelSixCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDgameTileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelSixCode.GDgameTileObjects1.length;i<l;++i) {
    if ( gdjs.levelSixCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() != runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelSixCode.GDgameTileObjects1[k] = gdjs.levelSixCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelSixCode.GDgameTileObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelSixCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.levelSixCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDgameTileObjects1[i].getBehavior("Tween").addObjectPositionYTween2("incorrectSlam", 1070, "linear", (1070 - (gdjs.levelSixCode.GDgameTileObjects1[i].getPointY(""))) / 2140, false);
}
}
{ //Subevents
gdjs.levelSixCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.levelSixCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star3"), gdjs.levelSixCode.GDstar3Objects2);
{for(var i = 0, len = gdjs.levelSixCode.GDstar3Objects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDstar3Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.levelSixCode.GDstar2Objects2);
{for(var i = 0, len = gdjs.levelSixCode.GDstar2Objects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDstar2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.levelSixCode.GDstar1Objects1);
{for(var i = 0, len = gdjs.levelSixCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDstar1Objects1[i].hide();
}
}}

}


};gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDbackButtonObjects2Objects = Hashtable.newFrom({"backButton": gdjs.levelSixCode.GDbackButtonObjects2});
gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDpauseButtonObjects2Objects = Hashtable.newFrom({"pauseButton": gdjs.levelSixCode.GDpauseButtonObjects2});
gdjs.levelSixCode.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelSixCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelSixCode.GDpauseWordObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{for(var i = 0, len = gdjs.levelSixCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDPauseScreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelSixCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDpauseWordObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelSixCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDPauseScreenObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answersNeededText"), gdjs.levelSixCode.GDanswersNeededTextObjects2);
{for(var i = 0, len = gdjs.levelSixCode.GDanswersNeededTextObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDanswersNeededTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(17).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.levelSixCode.GDbackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDbackButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseButton"), gdjs.levelSixCode.GDpauseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelSixCode.mapOfGDgdjs_9546levelSixCode_9546GDpauseButtonObjects2Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelSixCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelSixCode.GDpauseWordObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.levelSixCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDpauseWordObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelSixCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDPauseScreenObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelSixCode.GDPauseScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelSixCode.GDpauseWordObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.levelSixCode.GDpauseWordObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDpauseWordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.levelSixCode.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.levelSixCode.GDPauseScreenObjects1[i].hide();
}
}}

}


};gdjs.levelSixCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "levelSixTimer");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "levelSixTimer"));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LevelSixheaderTimer"), gdjs.levelSixCode.GDLevelSixheaderTimerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.floor(runtimeScene.getGame().getVariables().getFromIndex(37).getAsNumber() / 60));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(Math.floor(runtimeScene.getGame().getVariables().getFromIndex(37).getAsNumber() - (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 60)));
}{for(var i = 0, len = gdjs.levelSixCode.GDLevelSixheaderTimerObjects2.length ;i < len;++i) {
    gdjs.levelSixCode.GDLevelSixheaderTimerObjects2[i].setBBText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + ":0" + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + ":" + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}}

}


};gdjs.levelSixCode.eventsList18 = function(runtimeScene) {

{



}


{


gdjs.levelSixCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.levelSixCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.levelSixCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.levelSixCode.eventsList9(runtimeScene);
}


{



}


{


gdjs.levelSixCode.eventsList10(runtimeScene);
}


{


gdjs.levelSixCode.eventsList11(runtimeScene);
}


{


gdjs.levelSixCode.eventsList14(runtimeScene);
}


{


gdjs.levelSixCode.eventsList15(runtimeScene);
}


{



}


{


gdjs.levelSixCode.eventsList16(runtimeScene);
}


{


gdjs.levelSixCode.eventsList17(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.levelSixCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelSixCode.GDNewTextObjects1.length = 0;
gdjs.levelSixCode.GDNewTextObjects2.length = 0;
gdjs.levelSixCode.GDNewTextObjects3.length = 0;
gdjs.levelSixCode.GDNewText2Objects1.length = 0;
gdjs.levelSixCode.GDNewText2Objects2.length = 0;
gdjs.levelSixCode.GDNewText2Objects3.length = 0;
gdjs.levelSixCode.GDNewText3Objects1.length = 0;
gdjs.levelSixCode.GDNewText3Objects2.length = 0;
gdjs.levelSixCode.GDNewText3Objects3.length = 0;
gdjs.levelSixCode.GDgameTileObjects1.length = 0;
gdjs.levelSixCode.GDgameTileObjects2.length = 0;
gdjs.levelSixCode.GDgameTileObjects3.length = 0;
gdjs.levelSixCode.GDsplatObjects1.length = 0;
gdjs.levelSixCode.GDsplatObjects2.length = 0;
gdjs.levelSixCode.GDsplatObjects3.length = 0;
gdjs.levelSixCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelSixCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelSixCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelSixCode.GDfooterObjects1.length = 0;
gdjs.levelSixCode.GDfooterObjects2.length = 0;
gdjs.levelSixCode.GDfooterObjects3.length = 0;
gdjs.levelSixCode.GDbackgroundObjects1.length = 0;
gdjs.levelSixCode.GDbackgroundObjects2.length = 0;
gdjs.levelSixCode.GDbackgroundObjects3.length = 0;
gdjs.levelSixCode.GDbackButtonObjects1.length = 0;
gdjs.levelSixCode.GDbackButtonObjects2.length = 0;
gdjs.levelSixCode.GDbackButtonObjects3.length = 0;
gdjs.levelSixCode.GDpauseButtonObjects1.length = 0;
gdjs.levelSixCode.GDpauseButtonObjects2.length = 0;
gdjs.levelSixCode.GDpauseButtonObjects3.length = 0;
gdjs.levelSixCode.GDstarHolderObjects1.length = 0;
gdjs.levelSixCode.GDstarHolderObjects2.length = 0;
gdjs.levelSixCode.GDstarHolderObjects3.length = 0;
gdjs.levelSixCode.GDstar1Objects1.length = 0;
gdjs.levelSixCode.GDstar1Objects2.length = 0;
gdjs.levelSixCode.GDstar1Objects3.length = 0;
gdjs.levelSixCode.GDstar2Objects1.length = 0;
gdjs.levelSixCode.GDstar2Objects2.length = 0;
gdjs.levelSixCode.GDstar2Objects3.length = 0;
gdjs.levelSixCode.GDstar3Objects1.length = 0;
gdjs.levelSixCode.GDstar3Objects2.length = 0;
gdjs.levelSixCode.GDstar3Objects3.length = 0;
gdjs.levelSixCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelSixCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelSixCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelSixCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelSixCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelSixCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelSixCode.GDpauseWordObjects1.length = 0;
gdjs.levelSixCode.GDpauseWordObjects2.length = 0;
gdjs.levelSixCode.GDpauseWordObjects3.length = 0;
gdjs.levelSixCode.GDPauseScreenObjects1.length = 0;
gdjs.levelSixCode.GDPauseScreenObjects2.length = 0;
gdjs.levelSixCode.GDPauseScreenObjects3.length = 0;
gdjs.levelSixCode.GDCloudObjects1.length = 0;
gdjs.levelSixCode.GDCloudObjects2.length = 0;
gdjs.levelSixCode.GDCloudObjects3.length = 0;
gdjs.levelSixCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelSixCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelSixCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelSixCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelSixCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelSixCode.GDLevelSixheaderTimerObjects3.length = 0;

gdjs.levelSixCode.eventsList18(runtimeScene);
gdjs.levelSixCode.GDNewTextObjects1.length = 0;
gdjs.levelSixCode.GDNewTextObjects2.length = 0;
gdjs.levelSixCode.GDNewTextObjects3.length = 0;
gdjs.levelSixCode.GDNewText2Objects1.length = 0;
gdjs.levelSixCode.GDNewText2Objects2.length = 0;
gdjs.levelSixCode.GDNewText2Objects3.length = 0;
gdjs.levelSixCode.GDNewText3Objects1.length = 0;
gdjs.levelSixCode.GDNewText3Objects2.length = 0;
gdjs.levelSixCode.GDNewText3Objects3.length = 0;
gdjs.levelSixCode.GDgameTileObjects1.length = 0;
gdjs.levelSixCode.GDgameTileObjects2.length = 0;
gdjs.levelSixCode.GDgameTileObjects3.length = 0;
gdjs.levelSixCode.GDsplatObjects1.length = 0;
gdjs.levelSixCode.GDsplatObjects2.length = 0;
gdjs.levelSixCode.GDsplatObjects3.length = 0;
gdjs.levelSixCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelSixCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelSixCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelSixCode.GDfooterObjects1.length = 0;
gdjs.levelSixCode.GDfooterObjects2.length = 0;
gdjs.levelSixCode.GDfooterObjects3.length = 0;
gdjs.levelSixCode.GDbackgroundObjects1.length = 0;
gdjs.levelSixCode.GDbackgroundObjects2.length = 0;
gdjs.levelSixCode.GDbackgroundObjects3.length = 0;
gdjs.levelSixCode.GDbackButtonObjects1.length = 0;
gdjs.levelSixCode.GDbackButtonObjects2.length = 0;
gdjs.levelSixCode.GDbackButtonObjects3.length = 0;
gdjs.levelSixCode.GDpauseButtonObjects1.length = 0;
gdjs.levelSixCode.GDpauseButtonObjects2.length = 0;
gdjs.levelSixCode.GDpauseButtonObjects3.length = 0;
gdjs.levelSixCode.GDstarHolderObjects1.length = 0;
gdjs.levelSixCode.GDstarHolderObjects2.length = 0;
gdjs.levelSixCode.GDstarHolderObjects3.length = 0;
gdjs.levelSixCode.GDstar1Objects1.length = 0;
gdjs.levelSixCode.GDstar1Objects2.length = 0;
gdjs.levelSixCode.GDstar1Objects3.length = 0;
gdjs.levelSixCode.GDstar2Objects1.length = 0;
gdjs.levelSixCode.GDstar2Objects2.length = 0;
gdjs.levelSixCode.GDstar2Objects3.length = 0;
gdjs.levelSixCode.GDstar3Objects1.length = 0;
gdjs.levelSixCode.GDstar3Objects2.length = 0;
gdjs.levelSixCode.GDstar3Objects3.length = 0;
gdjs.levelSixCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelSixCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelSixCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelSixCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelSixCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelSixCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelSixCode.GDpauseWordObjects1.length = 0;
gdjs.levelSixCode.GDpauseWordObjects2.length = 0;
gdjs.levelSixCode.GDpauseWordObjects3.length = 0;
gdjs.levelSixCode.GDPauseScreenObjects1.length = 0;
gdjs.levelSixCode.GDPauseScreenObjects2.length = 0;
gdjs.levelSixCode.GDPauseScreenObjects3.length = 0;
gdjs.levelSixCode.GDCloudObjects1.length = 0;
gdjs.levelSixCode.GDCloudObjects2.length = 0;
gdjs.levelSixCode.GDCloudObjects3.length = 0;
gdjs.levelSixCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelSixCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelSixCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelSixCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelSixCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelSixCode.GDLevelSixheaderTimerObjects3.length = 0;


return;

}

gdjs['levelSixCode'] = gdjs.levelSixCode;

gdjs.levelThreeCode = {};
gdjs.levelThreeCode.localVariables = [];
gdjs.levelThreeCode.GDgameTileObjects1_1final = [];

gdjs.levelThreeCode.GDNewTextObjects1= [];
gdjs.levelThreeCode.GDNewTextObjects2= [];
gdjs.levelThreeCode.GDNewTextObjects3= [];
gdjs.levelThreeCode.GDNewText2Objects1= [];
gdjs.levelThreeCode.GDNewText2Objects2= [];
gdjs.levelThreeCode.GDNewText2Objects3= [];
gdjs.levelThreeCode.GDNewText3Objects1= [];
gdjs.levelThreeCode.GDNewText3Objects2= [];
gdjs.levelThreeCode.GDNewText3Objects3= [];
gdjs.levelThreeCode.GDgameTileObjects1= [];
gdjs.levelThreeCode.GDgameTileObjects2= [];
gdjs.levelThreeCode.GDgameTileObjects3= [];
gdjs.levelThreeCode.GDsplatObjects1= [];
gdjs.levelThreeCode.GDsplatObjects2= [];
gdjs.levelThreeCode.GDsplatObjects3= [];
gdjs.levelThreeCode.GDincorrectAnswerObjects1= [];
gdjs.levelThreeCode.GDincorrectAnswerObjects2= [];
gdjs.levelThreeCode.GDincorrectAnswerObjects3= [];
gdjs.levelThreeCode.GDfooterObjects1= [];
gdjs.levelThreeCode.GDfooterObjects2= [];
gdjs.levelThreeCode.GDfooterObjects3= [];
gdjs.levelThreeCode.GDbackgroundObjects1= [];
gdjs.levelThreeCode.GDbackgroundObjects2= [];
gdjs.levelThreeCode.GDbackgroundObjects3= [];
gdjs.levelThreeCode.GDbackButtonObjects1= [];
gdjs.levelThreeCode.GDbackButtonObjects2= [];
gdjs.levelThreeCode.GDbackButtonObjects3= [];
gdjs.levelThreeCode.GDpauseButtonObjects1= [];
gdjs.levelThreeCode.GDpauseButtonObjects2= [];
gdjs.levelThreeCode.GDpauseButtonObjects3= [];
gdjs.levelThreeCode.GDstarHolderObjects1= [];
gdjs.levelThreeCode.GDstarHolderObjects2= [];
gdjs.levelThreeCode.GDstarHolderObjects3= [];
gdjs.levelThreeCode.GDstar1Objects1= [];
gdjs.levelThreeCode.GDstar1Objects2= [];
gdjs.levelThreeCode.GDstar1Objects3= [];
gdjs.levelThreeCode.GDstar2Objects1= [];
gdjs.levelThreeCode.GDstar2Objects2= [];
gdjs.levelThreeCode.GDstar2Objects3= [];
gdjs.levelThreeCode.GDstar3Objects1= [];
gdjs.levelThreeCode.GDstar3Objects2= [];
gdjs.levelThreeCode.GDstar3Objects3= [];
gdjs.levelThreeCode.GDcorrectWordTextObjects1= [];
gdjs.levelThreeCode.GDcorrectWordTextObjects2= [];
gdjs.levelThreeCode.GDcorrectWordTextObjects3= [];
gdjs.levelThreeCode.GDanswersNeededTextObjects1= [];
gdjs.levelThreeCode.GDanswersNeededTextObjects2= [];
gdjs.levelThreeCode.GDanswersNeededTextObjects3= [];
gdjs.levelThreeCode.GDpauseWordObjects1= [];
gdjs.levelThreeCode.GDpauseWordObjects2= [];
gdjs.levelThreeCode.GDpauseWordObjects3= [];
gdjs.levelThreeCode.GDPauseScreenObjects1= [];
gdjs.levelThreeCode.GDPauseScreenObjects2= [];
gdjs.levelThreeCode.GDPauseScreenObjects3= [];
gdjs.levelThreeCode.GDCloudObjects1= [];
gdjs.levelThreeCode.GDCloudObjects2= [];
gdjs.levelThreeCode.GDCloudObjects3= [];
gdjs.levelThreeCode.GDLevelSixTimeObjects1= [];
gdjs.levelThreeCode.GDLevelSixTimeObjects2= [];
gdjs.levelThreeCode.GDLevelSixTimeObjects3= [];
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects1= [];
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects2= [];
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects3= [];


gdjs.levelThreeCode.eventsList0 = function(runtimeScene) {

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
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() / 1.01);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}}

}


};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects2});
gdjs.levelThreeCode.eventsList1 = function(runtimeScene) {

};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects1});
gdjs.levelThreeCode.eventsList2 = function(runtimeScene) {

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
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}
{ //Subevents: 
gdjs.levelThreeCode.eventsList1(runtimeScene);} //Subevents end.
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
gdjs.levelThreeCode.GDgameTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects1Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects1[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}}

}


};gdjs.levelThreeCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelThreeCode.GDcorrectWordTextObjects2);
gdjs.levelThreeCode.GDgameTileObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.levelThreeCode.GDcorrectWordTextObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDcorrectWordTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].returnVariable(gdjs.levelThreeCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
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
gdjs.levelThreeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.levelThreeCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0.0045);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0.005);
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() <= 0.0075);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() + 0.0005);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 0.0008);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}}

}


};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects2});
gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects3});
gdjs.levelThreeCode.asyncCallback13736380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelThreeCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}{for(var i = 0, len = gdjs.levelThreeCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].returnVariable(gdjs.levelThreeCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() + 1);
}gdjs.levelThreeCode.localVariables.length = 0;
}
gdjs.levelThreeCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
for (const obj of gdjs.levelThreeCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelThreeCode.asyncCallback13736380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects2});
gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelThreeCode.GDfooterObjects2});
gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects3});
gdjs.levelThreeCode.asyncCallback13741972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelThreeCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}{for(var i = 0, len = gdjs.levelThreeCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].returnVariable(gdjs.levelThreeCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}gdjs.levelThreeCode.localVariables.length = 0;
}
gdjs.levelThreeCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
for (const obj of gdjs.levelThreeCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelThreeCode.asyncCallback13741972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects2});
gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelThreeCode.GDfooterObjects2});
gdjs.levelThreeCode.asyncCallback13747324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}gdjs.levelThreeCode.localVariables.length = 0;
}
gdjs.levelThreeCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
for (const obj of gdjs.levelThreeCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelThreeCode.asyncCallback13747324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects1});
gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDfooterObjects1Objects = Hashtable.newFrom({"footer": gdjs.levelThreeCode.GDfooterObjects1});
gdjs.levelThreeCode.asyncCallback13750132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);

{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}gdjs.levelThreeCode.localVariables.length = 0;
}
gdjs.levelThreeCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
for (const obj of gdjs.levelThreeCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelThreeCode.asyncCallback13750132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelThreeCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelThreeCode.GDgameTileObjects2[k] = gdjs.levelThreeCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelThreeCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].returnVariable(gdjs.levelThreeCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelThreeCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelThreeCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelThreeCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelThreeCode.GDgameTileObjects2[k] = gdjs.levelThreeCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelThreeCode.GDgameTileObjects2[k] = gdjs.levelThreeCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelThreeCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].returnVariable(gdjs.levelThreeCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelThreeCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelThreeCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelThreeCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelThreeCode.GDgameTileObjects2[k] = gdjs.levelThreeCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelThreeCode.GDgameTileObjects2[k] = gdjs.levelThreeCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelThreeCode.GDgameTileObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelThreeCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelThreeCode.GDfooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects1Objects, "Physics2", gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDfooterObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelThreeCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.levelThreeCode.GDgameTileObjects1[k] = gdjs.levelThreeCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelThreeCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelThreeCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.levelThreeCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Level 3");
}{runtimeScene.getGame().getVariables().getFromIndex(20).setString("levelThree");
}{runtimeScene.getGame().getVariables().getFromIndex(21).setString("levelFour");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 18);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelFinishedScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(29).setBoolean(true);
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


};gdjs.levelThreeCode.eventsList11 = function(runtimeScene) {

{

gdjs.levelThreeCode.GDgameTileObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelThreeCode.GDgameTileObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects2[i].getX() > 532 ) {
        isConditionTrue_1 = true;
        gdjs.levelThreeCode.GDgameTileObjects2[k] = gdjs.levelThreeCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelThreeCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelThreeCode.GDgameTileObjects1_1final.indexOf(gdjs.levelThreeCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelThreeCode.GDgameTileObjects1_1final.push(gdjs.levelThreeCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects2[i].getX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.levelThreeCode.GDgameTileObjects2[k] = gdjs.levelThreeCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelThreeCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelThreeCode.GDgameTileObjects1_1final.indexOf(gdjs.levelThreeCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelThreeCode.GDgameTileObjects1_1final.push(gdjs.levelThreeCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelThreeCode.GDgameTileObjects1_1final, gdjs.levelThreeCode.GDgameTileObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelThreeCode.GDgameTileObjects1 */
{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects1[i].setPosition(gdjs.randomInRange(0, 532),-(188));
}
}}

}


};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelThreeCode.GDgameTileObjects1});
gdjs.levelThreeCode.asyncCallback13759116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelThreeCode.localVariables.length = 0;
}
gdjs.levelThreeCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
for (const obj of gdjs.levelThreeCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelThreeCode.asyncCallback13759116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelThreeCode.asyncCallback13758404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelThreeCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.levelThreeCode.localVariables.length = 0;
}
gdjs.levelThreeCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.levelThreeCode.GDgameTileObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelThreeCode.localVariables);
for (const obj of gdjs.levelThreeCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((1070 - (( gdjs.levelThreeCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelThreeCode.GDgameTileObjects1[0].getPointY(""))) / 2140), (runtimeScene) => (gdjs.levelThreeCode.asyncCallback13758404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelThreeCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelThreeCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDgameTileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelThreeCode.GDgameTileObjects1.length;i<l;++i) {
    if ( gdjs.levelThreeCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() != runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelThreeCode.GDgameTileObjects1[k] = gdjs.levelThreeCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelThreeCode.GDgameTileObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelThreeCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDgameTileObjects1[i].getBehavior("Tween").addObjectPositionYTween2("incorrectSlam", 1070, "linear", (1070 - (gdjs.levelThreeCode.GDgameTileObjects1[i].getPointY(""))) / 2140, false);
}
}
{ //Subevents
gdjs.levelThreeCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.levelThreeCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star3"), gdjs.levelThreeCode.GDstar3Objects2);
{for(var i = 0, len = gdjs.levelThreeCode.GDstar3Objects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDstar3Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.levelThreeCode.GDstar2Objects2);
{for(var i = 0, len = gdjs.levelThreeCode.GDstar2Objects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDstar2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.levelThreeCode.GDstar1Objects1);
{for(var i = 0, len = gdjs.levelThreeCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDstar1Objects1[i].hide();
}
}}

}


};gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDbackButtonObjects2Objects = Hashtable.newFrom({"backButton": gdjs.levelThreeCode.GDbackButtonObjects2});
gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDpauseButtonObjects2Objects = Hashtable.newFrom({"pauseButton": gdjs.levelThreeCode.GDpauseButtonObjects2});
gdjs.levelThreeCode.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelThreeCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelThreeCode.GDpauseWordObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(18);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{for(var i = 0, len = gdjs.levelThreeCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDPauseScreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDpauseWordObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDPauseScreenObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answersNeededText"), gdjs.levelThreeCode.GDanswersNeededTextObjects2);
{for(var i = 0, len = gdjs.levelThreeCode.GDanswersNeededTextObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDanswersNeededTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.levelThreeCode.GDbackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDbackButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseButton"), gdjs.levelThreeCode.GDpauseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelThreeCode.mapOfGDgdjs_9546levelThreeCode_9546GDpauseButtonObjects2Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelThreeCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelThreeCode.GDpauseWordObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.levelThreeCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDpauseWordObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelThreeCode.GDPauseScreenObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelThreeCode.GDPauseScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelThreeCode.GDpauseWordObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.levelThreeCode.GDpauseWordObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDpauseWordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.levelThreeCode.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.levelThreeCode.GDPauseScreenObjects1[i].hide();
}
}}

}


};gdjs.levelThreeCode.eventsList17 = function(runtimeScene) {

{



}


{


gdjs.levelThreeCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.levelThreeCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.levelThreeCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.levelThreeCode.eventsList9(runtimeScene);
}


{



}


{


gdjs.levelThreeCode.eventsList10(runtimeScene);
}


{


gdjs.levelThreeCode.eventsList11(runtimeScene);
}


{


gdjs.levelThreeCode.eventsList14(runtimeScene);
}


{


gdjs.levelThreeCode.eventsList15(runtimeScene);
}


{



}


{


gdjs.levelThreeCode.eventsList16(runtimeScene);
}


};

gdjs.levelThreeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelThreeCode.GDNewTextObjects1.length = 0;
gdjs.levelThreeCode.GDNewTextObjects2.length = 0;
gdjs.levelThreeCode.GDNewTextObjects3.length = 0;
gdjs.levelThreeCode.GDNewText2Objects1.length = 0;
gdjs.levelThreeCode.GDNewText2Objects2.length = 0;
gdjs.levelThreeCode.GDNewText2Objects3.length = 0;
gdjs.levelThreeCode.GDNewText3Objects1.length = 0;
gdjs.levelThreeCode.GDNewText3Objects2.length = 0;
gdjs.levelThreeCode.GDNewText3Objects3.length = 0;
gdjs.levelThreeCode.GDgameTileObjects1.length = 0;
gdjs.levelThreeCode.GDgameTileObjects2.length = 0;
gdjs.levelThreeCode.GDgameTileObjects3.length = 0;
gdjs.levelThreeCode.GDsplatObjects1.length = 0;
gdjs.levelThreeCode.GDsplatObjects2.length = 0;
gdjs.levelThreeCode.GDsplatObjects3.length = 0;
gdjs.levelThreeCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelThreeCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelThreeCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelThreeCode.GDfooterObjects1.length = 0;
gdjs.levelThreeCode.GDfooterObjects2.length = 0;
gdjs.levelThreeCode.GDfooterObjects3.length = 0;
gdjs.levelThreeCode.GDbackgroundObjects1.length = 0;
gdjs.levelThreeCode.GDbackgroundObjects2.length = 0;
gdjs.levelThreeCode.GDbackgroundObjects3.length = 0;
gdjs.levelThreeCode.GDbackButtonObjects1.length = 0;
gdjs.levelThreeCode.GDbackButtonObjects2.length = 0;
gdjs.levelThreeCode.GDbackButtonObjects3.length = 0;
gdjs.levelThreeCode.GDpauseButtonObjects1.length = 0;
gdjs.levelThreeCode.GDpauseButtonObjects2.length = 0;
gdjs.levelThreeCode.GDpauseButtonObjects3.length = 0;
gdjs.levelThreeCode.GDstarHolderObjects1.length = 0;
gdjs.levelThreeCode.GDstarHolderObjects2.length = 0;
gdjs.levelThreeCode.GDstarHolderObjects3.length = 0;
gdjs.levelThreeCode.GDstar1Objects1.length = 0;
gdjs.levelThreeCode.GDstar1Objects2.length = 0;
gdjs.levelThreeCode.GDstar1Objects3.length = 0;
gdjs.levelThreeCode.GDstar2Objects1.length = 0;
gdjs.levelThreeCode.GDstar2Objects2.length = 0;
gdjs.levelThreeCode.GDstar2Objects3.length = 0;
gdjs.levelThreeCode.GDstar3Objects1.length = 0;
gdjs.levelThreeCode.GDstar3Objects2.length = 0;
gdjs.levelThreeCode.GDstar3Objects3.length = 0;
gdjs.levelThreeCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelThreeCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelThreeCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelThreeCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelThreeCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelThreeCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelThreeCode.GDpauseWordObjects1.length = 0;
gdjs.levelThreeCode.GDpauseWordObjects2.length = 0;
gdjs.levelThreeCode.GDpauseWordObjects3.length = 0;
gdjs.levelThreeCode.GDPauseScreenObjects1.length = 0;
gdjs.levelThreeCode.GDPauseScreenObjects2.length = 0;
gdjs.levelThreeCode.GDPauseScreenObjects3.length = 0;
gdjs.levelThreeCode.GDCloudObjects1.length = 0;
gdjs.levelThreeCode.GDCloudObjects2.length = 0;
gdjs.levelThreeCode.GDCloudObjects3.length = 0;
gdjs.levelThreeCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelThreeCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelThreeCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects3.length = 0;

gdjs.levelThreeCode.eventsList17(runtimeScene);
gdjs.levelThreeCode.GDNewTextObjects1.length = 0;
gdjs.levelThreeCode.GDNewTextObjects2.length = 0;
gdjs.levelThreeCode.GDNewTextObjects3.length = 0;
gdjs.levelThreeCode.GDNewText2Objects1.length = 0;
gdjs.levelThreeCode.GDNewText2Objects2.length = 0;
gdjs.levelThreeCode.GDNewText2Objects3.length = 0;
gdjs.levelThreeCode.GDNewText3Objects1.length = 0;
gdjs.levelThreeCode.GDNewText3Objects2.length = 0;
gdjs.levelThreeCode.GDNewText3Objects3.length = 0;
gdjs.levelThreeCode.GDgameTileObjects1.length = 0;
gdjs.levelThreeCode.GDgameTileObjects2.length = 0;
gdjs.levelThreeCode.GDgameTileObjects3.length = 0;
gdjs.levelThreeCode.GDsplatObjects1.length = 0;
gdjs.levelThreeCode.GDsplatObjects2.length = 0;
gdjs.levelThreeCode.GDsplatObjects3.length = 0;
gdjs.levelThreeCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelThreeCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelThreeCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelThreeCode.GDfooterObjects1.length = 0;
gdjs.levelThreeCode.GDfooterObjects2.length = 0;
gdjs.levelThreeCode.GDfooterObjects3.length = 0;
gdjs.levelThreeCode.GDbackgroundObjects1.length = 0;
gdjs.levelThreeCode.GDbackgroundObjects2.length = 0;
gdjs.levelThreeCode.GDbackgroundObjects3.length = 0;
gdjs.levelThreeCode.GDbackButtonObjects1.length = 0;
gdjs.levelThreeCode.GDbackButtonObjects2.length = 0;
gdjs.levelThreeCode.GDbackButtonObjects3.length = 0;
gdjs.levelThreeCode.GDpauseButtonObjects1.length = 0;
gdjs.levelThreeCode.GDpauseButtonObjects2.length = 0;
gdjs.levelThreeCode.GDpauseButtonObjects3.length = 0;
gdjs.levelThreeCode.GDstarHolderObjects1.length = 0;
gdjs.levelThreeCode.GDstarHolderObjects2.length = 0;
gdjs.levelThreeCode.GDstarHolderObjects3.length = 0;
gdjs.levelThreeCode.GDstar1Objects1.length = 0;
gdjs.levelThreeCode.GDstar1Objects2.length = 0;
gdjs.levelThreeCode.GDstar1Objects3.length = 0;
gdjs.levelThreeCode.GDstar2Objects1.length = 0;
gdjs.levelThreeCode.GDstar2Objects2.length = 0;
gdjs.levelThreeCode.GDstar2Objects3.length = 0;
gdjs.levelThreeCode.GDstar3Objects1.length = 0;
gdjs.levelThreeCode.GDstar3Objects2.length = 0;
gdjs.levelThreeCode.GDstar3Objects3.length = 0;
gdjs.levelThreeCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelThreeCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelThreeCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelThreeCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelThreeCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelThreeCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelThreeCode.GDpauseWordObjects1.length = 0;
gdjs.levelThreeCode.GDpauseWordObjects2.length = 0;
gdjs.levelThreeCode.GDpauseWordObjects3.length = 0;
gdjs.levelThreeCode.GDPauseScreenObjects1.length = 0;
gdjs.levelThreeCode.GDPauseScreenObjects2.length = 0;
gdjs.levelThreeCode.GDPauseScreenObjects3.length = 0;
gdjs.levelThreeCode.GDCloudObjects1.length = 0;
gdjs.levelThreeCode.GDCloudObjects2.length = 0;
gdjs.levelThreeCode.GDCloudObjects3.length = 0;
gdjs.levelThreeCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelThreeCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelThreeCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelThreeCode.GDLevelSixheaderTimerObjects3.length = 0;


return;

}

gdjs['levelThreeCode'] = gdjs.levelThreeCode;

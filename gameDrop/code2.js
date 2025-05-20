gdjs.levelOneCode = {};
gdjs.levelOneCode.localVariables = [];
gdjs.levelOneCode.GDgameTileObjects2_1final = [];

gdjs.levelOneCode.GDNewTextObjects1= [];
gdjs.levelOneCode.GDNewTextObjects2= [];
gdjs.levelOneCode.GDNewTextObjects3= [];
gdjs.levelOneCode.GDNewText2Objects1= [];
gdjs.levelOneCode.GDNewText2Objects2= [];
gdjs.levelOneCode.GDNewText2Objects3= [];
gdjs.levelOneCode.GDNewText3Objects1= [];
gdjs.levelOneCode.GDNewText3Objects2= [];
gdjs.levelOneCode.GDNewText3Objects3= [];
gdjs.levelOneCode.GDgameTileObjects1= [];
gdjs.levelOneCode.GDgameTileObjects2= [];
gdjs.levelOneCode.GDgameTileObjects3= [];
gdjs.levelOneCode.GDsplatObjects1= [];
gdjs.levelOneCode.GDsplatObjects2= [];
gdjs.levelOneCode.GDsplatObjects3= [];
gdjs.levelOneCode.GDincorrectAnswerObjects1= [];
gdjs.levelOneCode.GDincorrectAnswerObjects2= [];
gdjs.levelOneCode.GDincorrectAnswerObjects3= [];
gdjs.levelOneCode.GDfooterObjects1= [];
gdjs.levelOneCode.GDfooterObjects2= [];
gdjs.levelOneCode.GDfooterObjects3= [];
gdjs.levelOneCode.GDbackgroundObjects1= [];
gdjs.levelOneCode.GDbackgroundObjects2= [];
gdjs.levelOneCode.GDbackgroundObjects3= [];
gdjs.levelOneCode.GDbackButtonObjects1= [];
gdjs.levelOneCode.GDbackButtonObjects2= [];
gdjs.levelOneCode.GDbackButtonObjects3= [];
gdjs.levelOneCode.GDpauseButtonObjects1= [];
gdjs.levelOneCode.GDpauseButtonObjects2= [];
gdjs.levelOneCode.GDpauseButtonObjects3= [];
gdjs.levelOneCode.GDstarHolderObjects1= [];
gdjs.levelOneCode.GDstarHolderObjects2= [];
gdjs.levelOneCode.GDstarHolderObjects3= [];
gdjs.levelOneCode.GDstar1Objects1= [];
gdjs.levelOneCode.GDstar1Objects2= [];
gdjs.levelOneCode.GDstar1Objects3= [];
gdjs.levelOneCode.GDstar2Objects1= [];
gdjs.levelOneCode.GDstar2Objects2= [];
gdjs.levelOneCode.GDstar2Objects3= [];
gdjs.levelOneCode.GDstar3Objects1= [];
gdjs.levelOneCode.GDstar3Objects2= [];
gdjs.levelOneCode.GDstar3Objects3= [];
gdjs.levelOneCode.GDcorrectWordTextObjects1= [];
gdjs.levelOneCode.GDcorrectWordTextObjects2= [];
gdjs.levelOneCode.GDcorrectWordTextObjects3= [];
gdjs.levelOneCode.GDanswersNeededTextObjects1= [];
gdjs.levelOneCode.GDanswersNeededTextObjects2= [];
gdjs.levelOneCode.GDanswersNeededTextObjects3= [];
gdjs.levelOneCode.GDpauseWordObjects1= [];
gdjs.levelOneCode.GDpauseWordObjects2= [];
gdjs.levelOneCode.GDpauseWordObjects3= [];
gdjs.levelOneCode.GDPauseScreenObjects1= [];
gdjs.levelOneCode.GDPauseScreenObjects2= [];
gdjs.levelOneCode.GDPauseScreenObjects3= [];
gdjs.levelOneCode.GDCloudObjects1= [];
gdjs.levelOneCode.GDCloudObjects2= [];
gdjs.levelOneCode.GDCloudObjects3= [];
gdjs.levelOneCode.GDLevelSixTimeObjects1= [];
gdjs.levelOneCode.GDLevelSixTimeObjects2= [];
gdjs.levelOneCode.GDLevelSixTimeObjects3= [];
gdjs.levelOneCode.GDLevelSixheaderTimerObjects1= [];
gdjs.levelOneCode.GDLevelSixheaderTimerObjects2= [];
gdjs.levelOneCode.GDLevelSixheaderTimerObjects3= [];
gdjs.levelOneCode.GDquestionMarkObjects1= [];
gdjs.levelOneCode.GDquestionMarkObjects2= [];
gdjs.levelOneCode.GDquestionMarkObjects3= [];


gdjs.levelOneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(gdjs.randomInRange(8, 10));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "generationRateIncreaser") >= 10;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() / 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}}

}


};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects2});
gdjs.levelOneCode.eventsList1 = function(runtimeScene) {

};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects1});
gdjs.levelOneCode.eventsList2 = function(runtimeScene) {

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
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}
{ //Subevents: 
gdjs.levelOneCode.eventsList1(runtimeScene);} //Subevents end.
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
gdjs.levelOneCode.GDgameTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects1Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects1[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}}

}


};gdjs.levelOneCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelOneCode.GDcorrectWordTextObjects2);
gdjs.levelOneCode.GDgameTileObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.levelOneCode.GDcorrectWordTextObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDcorrectWordTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].returnVariable(gdjs.levelOneCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
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
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}
{ //Subevents
gdjs.levelOneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.levelOneCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0.003);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0.0035);
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
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
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 0.0005);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}}

}


};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects2});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects3});
gdjs.levelOneCode.asyncCallback14698748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelOneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelOneCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}{for(var i = 0, len = gdjs.levelOneCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects3[i].returnVariable(gdjs.levelOneCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() + 1);
}gdjs.levelOneCode.localVariables.length = 0;
}
gdjs.levelOneCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelOneCode.localVariables);
for (const obj of gdjs.levelOneCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelOneCode.asyncCallback14698748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects2});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelOneCode.GDfooterObjects2});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelOneCode.GDsplatObjects2});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects3});
gdjs.levelOneCode.asyncCallback14678748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelOneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelOneCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelOneCode.GDsplatObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelOneCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}{for(var i = 0, len = gdjs.levelOneCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects3[i].returnVariable(gdjs.levelOneCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}gdjs.levelOneCode.localVariables.length = 0;
}
gdjs.levelOneCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelOneCode.localVariables);
for (const obj of gdjs.levelOneCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
for (const obj of gdjs.levelOneCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelOneCode.asyncCallback14678748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects2});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelOneCode.GDfooterObjects2});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelOneCode.GDsplatObjects2});
gdjs.levelOneCode.asyncCallback14715892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelOneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelOneCode.GDsplatObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelOneCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelOneCode.localVariables.length = 0;
}
gdjs.levelOneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelOneCode.localVariables);
for (const obj of gdjs.levelOneCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelOneCode.asyncCallback14715892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects1});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDfooterObjects1Objects = Hashtable.newFrom({"footer": gdjs.levelOneCode.GDfooterObjects1});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects1Objects = Hashtable.newFrom({"splat": gdjs.levelOneCode.GDsplatObjects1});
gdjs.levelOneCode.asyncCallback14706172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelOneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelOneCode.GDsplatObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelOneCode.GDsplatObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDsplatObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.levelOneCode.localVariables.length = 0;
}
gdjs.levelOneCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelOneCode.localVariables);
for (const obj of gdjs.levelOneCode.GDsplatObjects1) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelOneCode.asyncCallback14706172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelOneCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelOneCode.GDgameTileObjects2[k] = gdjs.levelOneCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelOneCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].returnVariable(gdjs.levelOneCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelOneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelOneCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelOneCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelOneCode.GDgameTileObjects2[k] = gdjs.levelOneCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelOneCode.GDgameTileObjects2[k] = gdjs.levelOneCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelOneCode.GDgameTileObjects2 */
gdjs.levelOneCode.GDsplatObjects2.length = 0;

{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].returnVariable(gdjs.levelOneCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.mp3", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects2Objects, (( gdjs.levelOneCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelOneCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelOneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelOneCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelOneCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelOneCode.GDgameTileObjects2[k] = gdjs.levelOneCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelOneCode.GDgameTileObjects2[k] = gdjs.levelOneCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelOneCode.GDgameTileObjects2 */
gdjs.levelOneCode.GDsplatObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.mp3", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects2Objects, (( gdjs.levelOneCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelOneCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelOneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelOneCode.GDfooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects1Objects, "Physics2", gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDfooterObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelOneCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.levelOneCode.GDgameTileObjects1[k] = gdjs.levelOneCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelOneCode.GDgameTileObjects1 */
gdjs.levelOneCode.GDsplatObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.mp3", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects1Objects, (( gdjs.levelOneCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects1[0].getPointX("")), (( gdjs.levelOneCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelOneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.levelOneCode.eventsList10 = function(runtimeScene) {

{

gdjs.levelOneCode.GDgameTileObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelOneCode.GDgameTileObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects3);
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects3.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects3[i].getX() > 532 ) {
        isConditionTrue_1 = true;
        gdjs.levelOneCode.GDgameTileObjects3[k] = gdjs.levelOneCode.GDgameTileObjects3[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelOneCode.GDgameTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.levelOneCode.GDgameTileObjects2_1final.indexOf(gdjs.levelOneCode.GDgameTileObjects3[j]) === -1 )
            gdjs.levelOneCode.GDgameTileObjects2_1final.push(gdjs.levelOneCode.GDgameTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects3);
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects3.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects3[i].getX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.levelOneCode.GDgameTileObjects3[k] = gdjs.levelOneCode.GDgameTileObjects3[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelOneCode.GDgameTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.levelOneCode.GDgameTileObjects2_1final.indexOf(gdjs.levelOneCode.GDgameTileObjects3[j]) === -1 )
            gdjs.levelOneCode.GDgameTileObjects2_1final.push(gdjs.levelOneCode.GDgameTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelOneCode.GDgameTileObjects2_1final, gdjs.levelOneCode.GDgameTileObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelOneCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].setPosition(gdjs.randomInRange(0, 532),-(188));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Level 1");
}{runtimeScene.getGame().getVariables().getFromIndex(21).setString("levelTwo");
}{runtimeScene.getGame().getVariables().getFromIndex(20).setString("levelOne");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelFinishedScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(32).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(27).setBoolean(true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("gameProgress", "levelOnePassed", runtimeScene.getGame().getVariables().getFromIndex(27).getAsNumber());
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


};gdjs.levelOneCode.eventsList11 = function(runtimeScene) {

};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelOneCode.GDgameTileObjects1});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects2Objects = Hashtable.newFrom({"splat": gdjs.levelOneCode.GDsplatObjects2});
gdjs.levelOneCode.asyncCallback14739228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelOneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("splat"), gdjs.levelOneCode.GDsplatObjects3);

{for(var i = 0, len = gdjs.levelOneCode.GDsplatObjects3.length ;i < len;++i) {
    gdjs.levelOneCode.GDsplatObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelOneCode.localVariables.length = 0;
}
gdjs.levelOneCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelOneCode.localVariables);
for (const obj of gdjs.levelOneCode.GDsplatObjects2) asyncObjectsList.addObject("splat", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelOneCode.asyncCallback14739228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelOneCode.asyncCallback14738116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelOneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects2);

gdjs.levelOneCode.GDsplatObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.mp3", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDsplatObjects2Objects, (( gdjs.levelOneCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects2[0].getPointX("")), (( gdjs.levelOneCode.GDgameTileObjects2.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelOneCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.levelOneCode.localVariables.length = 0;
}
gdjs.levelOneCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.levelOneCode.GDgameTileObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelOneCode.localVariables);
for (const obj of gdjs.levelOneCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((1070 - (( gdjs.levelOneCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelOneCode.GDgameTileObjects1[0].getPointY(""))) / 2140), (runtimeScene) => (gdjs.levelOneCode.asyncCallback14738116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelOneCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelOneCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDgameTileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelOneCode.GDgameTileObjects1.length;i<l;++i) {
    if ( gdjs.levelOneCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() != runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelOneCode.GDgameTileObjects1[k] = gdjs.levelOneCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelOneCode.GDgameTileObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelOneCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.levelOneCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDgameTileObjects1[i].getBehavior("Tween").addObjectPositionYTween2("incorrectSlam", 1070, "linear", (1070 - (gdjs.levelOneCode.GDgameTileObjects1[i].getPointY(""))) / 2140, false);
}
}
{ //Subevents
gdjs.levelOneCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.levelOneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star3"), gdjs.levelOneCode.GDstar3Objects2);
{for(var i = 0, len = gdjs.levelOneCode.GDstar3Objects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDstar3Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.levelOneCode.GDstar2Objects2);
{for(var i = 0, len = gdjs.levelOneCode.GDstar2Objects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDstar2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.levelOneCode.GDstar1Objects1);
{for(var i = 0, len = gdjs.levelOneCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDstar1Objects1[i].hide();
}
}}

}


};gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDbackButtonObjects2Objects = Hashtable.newFrom({"backButton": gdjs.levelOneCode.GDbackButtonObjects2});
gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDpauseButtonObjects2Objects = Hashtable.newFrom({"pauseButton": gdjs.levelOneCode.GDpauseButtonObjects2});
gdjs.levelOneCode.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelOneCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelOneCode.GDpauseWordObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{for(var i = 0, len = gdjs.levelOneCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDPauseScreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelOneCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDpauseWordObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelOneCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDPauseScreenObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answersNeededText"), gdjs.levelOneCode.GDanswersNeededTextObjects2);
{for(var i = 0, len = gdjs.levelOneCode.GDanswersNeededTextObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDanswersNeededTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.levelOneCode.GDbackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDbackButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseButton"), gdjs.levelOneCode.GDpauseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelOneCode.mapOfGDgdjs_9546levelOneCode_9546GDpauseButtonObjects2Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelOneCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelOneCode.GDpauseWordObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.levelOneCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDpauseWordObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelOneCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelOneCode.GDPauseScreenObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelOneCode.GDPauseScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelOneCode.GDpauseWordObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.levelOneCode.GDpauseWordObjects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDpauseWordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.levelOneCode.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.levelOneCode.GDPauseScreenObjects1[i].hide();
}
}}

}


};gdjs.levelOneCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(39).setBoolean(true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("gameProgress", "introViewed", runtimeScene.getGame().getVariables().getFromIndex(39).getAsNumber());
}}

}


};gdjs.levelOneCode.eventsList18 = function(runtimeScene) {

{



}


{


gdjs.levelOneCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.levelOneCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.levelOneCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.levelOneCode.eventsList9(runtimeScene);
}


{



}


{


gdjs.levelOneCode.eventsList10(runtimeScene);
}


{


gdjs.levelOneCode.eventsList11(runtimeScene);
}


{


gdjs.levelOneCode.eventsList14(runtimeScene);
}


{


gdjs.levelOneCode.eventsList15(runtimeScene);
}


{



}


{


gdjs.levelOneCode.eventsList16(runtimeScene);
}


{


gdjs.levelOneCode.eventsList17(runtimeScene);
}


};

gdjs.levelOneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelOneCode.GDNewTextObjects1.length = 0;
gdjs.levelOneCode.GDNewTextObjects2.length = 0;
gdjs.levelOneCode.GDNewTextObjects3.length = 0;
gdjs.levelOneCode.GDNewText2Objects1.length = 0;
gdjs.levelOneCode.GDNewText2Objects2.length = 0;
gdjs.levelOneCode.GDNewText2Objects3.length = 0;
gdjs.levelOneCode.GDNewText3Objects1.length = 0;
gdjs.levelOneCode.GDNewText3Objects2.length = 0;
gdjs.levelOneCode.GDNewText3Objects3.length = 0;
gdjs.levelOneCode.GDgameTileObjects1.length = 0;
gdjs.levelOneCode.GDgameTileObjects2.length = 0;
gdjs.levelOneCode.GDgameTileObjects3.length = 0;
gdjs.levelOneCode.GDsplatObjects1.length = 0;
gdjs.levelOneCode.GDsplatObjects2.length = 0;
gdjs.levelOneCode.GDsplatObjects3.length = 0;
gdjs.levelOneCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelOneCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelOneCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelOneCode.GDfooterObjects1.length = 0;
gdjs.levelOneCode.GDfooterObjects2.length = 0;
gdjs.levelOneCode.GDfooterObjects3.length = 0;
gdjs.levelOneCode.GDbackgroundObjects1.length = 0;
gdjs.levelOneCode.GDbackgroundObjects2.length = 0;
gdjs.levelOneCode.GDbackgroundObjects3.length = 0;
gdjs.levelOneCode.GDbackButtonObjects1.length = 0;
gdjs.levelOneCode.GDbackButtonObjects2.length = 0;
gdjs.levelOneCode.GDbackButtonObjects3.length = 0;
gdjs.levelOneCode.GDpauseButtonObjects1.length = 0;
gdjs.levelOneCode.GDpauseButtonObjects2.length = 0;
gdjs.levelOneCode.GDpauseButtonObjects3.length = 0;
gdjs.levelOneCode.GDstarHolderObjects1.length = 0;
gdjs.levelOneCode.GDstarHolderObjects2.length = 0;
gdjs.levelOneCode.GDstarHolderObjects3.length = 0;
gdjs.levelOneCode.GDstar1Objects1.length = 0;
gdjs.levelOneCode.GDstar1Objects2.length = 0;
gdjs.levelOneCode.GDstar1Objects3.length = 0;
gdjs.levelOneCode.GDstar2Objects1.length = 0;
gdjs.levelOneCode.GDstar2Objects2.length = 0;
gdjs.levelOneCode.GDstar2Objects3.length = 0;
gdjs.levelOneCode.GDstar3Objects1.length = 0;
gdjs.levelOneCode.GDstar3Objects2.length = 0;
gdjs.levelOneCode.GDstar3Objects3.length = 0;
gdjs.levelOneCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelOneCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelOneCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelOneCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelOneCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelOneCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelOneCode.GDpauseWordObjects1.length = 0;
gdjs.levelOneCode.GDpauseWordObjects2.length = 0;
gdjs.levelOneCode.GDpauseWordObjects3.length = 0;
gdjs.levelOneCode.GDPauseScreenObjects1.length = 0;
gdjs.levelOneCode.GDPauseScreenObjects2.length = 0;
gdjs.levelOneCode.GDPauseScreenObjects3.length = 0;
gdjs.levelOneCode.GDCloudObjects1.length = 0;
gdjs.levelOneCode.GDCloudObjects2.length = 0;
gdjs.levelOneCode.GDCloudObjects3.length = 0;
gdjs.levelOneCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelOneCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelOneCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelOneCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelOneCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelOneCode.GDLevelSixheaderTimerObjects3.length = 0;
gdjs.levelOneCode.GDquestionMarkObjects1.length = 0;
gdjs.levelOneCode.GDquestionMarkObjects2.length = 0;
gdjs.levelOneCode.GDquestionMarkObjects3.length = 0;

gdjs.levelOneCode.eventsList18(runtimeScene);
gdjs.levelOneCode.GDNewTextObjects1.length = 0;
gdjs.levelOneCode.GDNewTextObjects2.length = 0;
gdjs.levelOneCode.GDNewTextObjects3.length = 0;
gdjs.levelOneCode.GDNewText2Objects1.length = 0;
gdjs.levelOneCode.GDNewText2Objects2.length = 0;
gdjs.levelOneCode.GDNewText2Objects3.length = 0;
gdjs.levelOneCode.GDNewText3Objects1.length = 0;
gdjs.levelOneCode.GDNewText3Objects2.length = 0;
gdjs.levelOneCode.GDNewText3Objects3.length = 0;
gdjs.levelOneCode.GDgameTileObjects1.length = 0;
gdjs.levelOneCode.GDgameTileObjects2.length = 0;
gdjs.levelOneCode.GDgameTileObjects3.length = 0;
gdjs.levelOneCode.GDsplatObjects1.length = 0;
gdjs.levelOneCode.GDsplatObjects2.length = 0;
gdjs.levelOneCode.GDsplatObjects3.length = 0;
gdjs.levelOneCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelOneCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelOneCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelOneCode.GDfooterObjects1.length = 0;
gdjs.levelOneCode.GDfooterObjects2.length = 0;
gdjs.levelOneCode.GDfooterObjects3.length = 0;
gdjs.levelOneCode.GDbackgroundObjects1.length = 0;
gdjs.levelOneCode.GDbackgroundObjects2.length = 0;
gdjs.levelOneCode.GDbackgroundObjects3.length = 0;
gdjs.levelOneCode.GDbackButtonObjects1.length = 0;
gdjs.levelOneCode.GDbackButtonObjects2.length = 0;
gdjs.levelOneCode.GDbackButtonObjects3.length = 0;
gdjs.levelOneCode.GDpauseButtonObjects1.length = 0;
gdjs.levelOneCode.GDpauseButtonObjects2.length = 0;
gdjs.levelOneCode.GDpauseButtonObjects3.length = 0;
gdjs.levelOneCode.GDstarHolderObjects1.length = 0;
gdjs.levelOneCode.GDstarHolderObjects2.length = 0;
gdjs.levelOneCode.GDstarHolderObjects3.length = 0;
gdjs.levelOneCode.GDstar1Objects1.length = 0;
gdjs.levelOneCode.GDstar1Objects2.length = 0;
gdjs.levelOneCode.GDstar1Objects3.length = 0;
gdjs.levelOneCode.GDstar2Objects1.length = 0;
gdjs.levelOneCode.GDstar2Objects2.length = 0;
gdjs.levelOneCode.GDstar2Objects3.length = 0;
gdjs.levelOneCode.GDstar3Objects1.length = 0;
gdjs.levelOneCode.GDstar3Objects2.length = 0;
gdjs.levelOneCode.GDstar3Objects3.length = 0;
gdjs.levelOneCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelOneCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelOneCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelOneCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelOneCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelOneCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelOneCode.GDpauseWordObjects1.length = 0;
gdjs.levelOneCode.GDpauseWordObjects2.length = 0;
gdjs.levelOneCode.GDpauseWordObjects3.length = 0;
gdjs.levelOneCode.GDPauseScreenObjects1.length = 0;
gdjs.levelOneCode.GDPauseScreenObjects2.length = 0;
gdjs.levelOneCode.GDPauseScreenObjects3.length = 0;
gdjs.levelOneCode.GDCloudObjects1.length = 0;
gdjs.levelOneCode.GDCloudObjects2.length = 0;
gdjs.levelOneCode.GDCloudObjects3.length = 0;
gdjs.levelOneCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelOneCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelOneCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelOneCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelOneCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelOneCode.GDLevelSixheaderTimerObjects3.length = 0;
gdjs.levelOneCode.GDquestionMarkObjects1.length = 0;
gdjs.levelOneCode.GDquestionMarkObjects2.length = 0;
gdjs.levelOneCode.GDquestionMarkObjects3.length = 0;


return;

}

gdjs['levelOneCode'] = gdjs.levelOneCode;

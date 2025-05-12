gdjs.levelFourCode = {};
gdjs.levelFourCode.localVariables = [];
gdjs.levelFourCode.GDgameTileObjects1_1final = [];

gdjs.levelFourCode.GDNewTextObjects1= [];
gdjs.levelFourCode.GDNewTextObjects2= [];
gdjs.levelFourCode.GDNewTextObjects3= [];
gdjs.levelFourCode.GDNewText2Objects1= [];
gdjs.levelFourCode.GDNewText2Objects2= [];
gdjs.levelFourCode.GDNewText2Objects3= [];
gdjs.levelFourCode.GDNewText3Objects1= [];
gdjs.levelFourCode.GDNewText3Objects2= [];
gdjs.levelFourCode.GDNewText3Objects3= [];
gdjs.levelFourCode.GDgameTileObjects1= [];
gdjs.levelFourCode.GDgameTileObjects2= [];
gdjs.levelFourCode.GDgameTileObjects3= [];
gdjs.levelFourCode.GDsplatObjects1= [];
gdjs.levelFourCode.GDsplatObjects2= [];
gdjs.levelFourCode.GDsplatObjects3= [];
gdjs.levelFourCode.GDincorrectAnswerObjects1= [];
gdjs.levelFourCode.GDincorrectAnswerObjects2= [];
gdjs.levelFourCode.GDincorrectAnswerObjects3= [];
gdjs.levelFourCode.GDfooterObjects1= [];
gdjs.levelFourCode.GDfooterObjects2= [];
gdjs.levelFourCode.GDfooterObjects3= [];
gdjs.levelFourCode.GDbackgroundObjects1= [];
gdjs.levelFourCode.GDbackgroundObjects2= [];
gdjs.levelFourCode.GDbackgroundObjects3= [];
gdjs.levelFourCode.GDbackButtonObjects1= [];
gdjs.levelFourCode.GDbackButtonObjects2= [];
gdjs.levelFourCode.GDbackButtonObjects3= [];
gdjs.levelFourCode.GDpauseButtonObjects1= [];
gdjs.levelFourCode.GDpauseButtonObjects2= [];
gdjs.levelFourCode.GDpauseButtonObjects3= [];
gdjs.levelFourCode.GDstarHolderObjects1= [];
gdjs.levelFourCode.GDstarHolderObjects2= [];
gdjs.levelFourCode.GDstarHolderObjects3= [];
gdjs.levelFourCode.GDstar1Objects1= [];
gdjs.levelFourCode.GDstar1Objects2= [];
gdjs.levelFourCode.GDstar1Objects3= [];
gdjs.levelFourCode.GDstar2Objects1= [];
gdjs.levelFourCode.GDstar2Objects2= [];
gdjs.levelFourCode.GDstar2Objects3= [];
gdjs.levelFourCode.GDstar3Objects1= [];
gdjs.levelFourCode.GDstar3Objects2= [];
gdjs.levelFourCode.GDstar3Objects3= [];
gdjs.levelFourCode.GDcorrectWordTextObjects1= [];
gdjs.levelFourCode.GDcorrectWordTextObjects2= [];
gdjs.levelFourCode.GDcorrectWordTextObjects3= [];
gdjs.levelFourCode.GDanswersNeededTextObjects1= [];
gdjs.levelFourCode.GDanswersNeededTextObjects2= [];
gdjs.levelFourCode.GDanswersNeededTextObjects3= [];
gdjs.levelFourCode.GDpauseWordObjects1= [];
gdjs.levelFourCode.GDpauseWordObjects2= [];
gdjs.levelFourCode.GDpauseWordObjects3= [];
gdjs.levelFourCode.GDPauseScreenObjects1= [];
gdjs.levelFourCode.GDPauseScreenObjects2= [];
gdjs.levelFourCode.GDPauseScreenObjects3= [];
gdjs.levelFourCode.GDCloudObjects1= [];
gdjs.levelFourCode.GDCloudObjects2= [];
gdjs.levelFourCode.GDCloudObjects3= [];
gdjs.levelFourCode.GDLevelSixTimeObjects1= [];
gdjs.levelFourCode.GDLevelSixTimeObjects2= [];
gdjs.levelFourCode.GDLevelSixTimeObjects3= [];
gdjs.levelFourCode.GDLevelSixheaderTimerObjects1= [];
gdjs.levelFourCode.GDLevelSixheaderTimerObjects2= [];
gdjs.levelFourCode.GDLevelSixheaderTimerObjects3= [];


gdjs.levelFourCode.eventsList0 = function(runtimeScene) {

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
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() / 1.03);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "generationRateIncreaser");
}}

}


};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects2});
gdjs.levelFourCode.eventsList1 = function(runtimeScene) {

};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects1});
gdjs.levelFourCode.eventsList2 = function(runtimeScene) {

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
gdjs.levelFourCode.eventsList1(runtimeScene);} //Subevents end.
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
gdjs.levelFourCode.GDgameTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects1Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects1[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}}

}


};gdjs.levelFourCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelFourCode.GDcorrectWordTextObjects2);
gdjs.levelFourCode.GDgameTileObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "incorrectAnswerGenTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.levelFourCode.GDcorrectWordTextObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDcorrectWordTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].returnVariable(gdjs.levelFourCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
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
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
{ //Subevents
gdjs.levelFourCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.levelFourCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0.005);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0.0065);
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() <= 0.0095);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() + 0.0005);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 0.0008);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gravityScaleTimer");
}}

}


};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects2});
gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects3});
gdjs.levelFourCode.asyncCallback13806300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFourCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelFourCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects3);

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}{for(var i = 0, len = gdjs.levelFourCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].returnVariable(gdjs.levelFourCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() + 1);
}gdjs.levelFourCode.localVariables.length = 0;
}
gdjs.levelFourCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFourCode.localVariables);
for (const obj of gdjs.levelFourCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFourCode.asyncCallback13806300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects2});
gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelFourCode.GDfooterObjects2});
gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects3Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects3});
gdjs.levelFourCode.asyncCallback13811892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFourCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("correctWordText"), gdjs.levelFourCode.GDcorrectWordTextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}{for(var i = 0, len = gdjs.levelFourCode.GDcorrectWordTextObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDcorrectWordTextObjects3[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects3Objects, gdjs.randomInRange(0, 532), -(188), "");
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].returnVariable(gdjs.levelFourCode.GDgameTileObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].getBehavior("Physics2").setGravityScale(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}gdjs.levelFourCode.localVariables.length = 0;
}
gdjs.levelFourCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFourCode.localVariables);
for (const obj of gdjs.levelFourCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFourCode.asyncCallback13811892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects2});
gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDfooterObjects2Objects = Hashtable.newFrom({"footer": gdjs.levelFourCode.GDfooterObjects2});
gdjs.levelFourCode.asyncCallback13817244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFourCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}gdjs.levelFourCode.localVariables.length = 0;
}
gdjs.levelFourCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFourCode.localVariables);
for (const obj of gdjs.levelFourCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFourCode.asyncCallback13817244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects1});
gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDfooterObjects1Objects = Hashtable.newFrom({"footer": gdjs.levelFourCode.GDfooterObjects1});
gdjs.levelFourCode.asyncCallback13820052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFourCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);

{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}gdjs.levelFourCode.localVariables.length = 0;
}
gdjs.levelFourCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFourCode.localVariables);
for (const obj of gdjs.levelFourCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFourCode.asyncCallback13820052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFourCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFourCode.GDgameTileObjects2[k] = gdjs.levelFourCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFourCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].returnVariable(gdjs.levelFourCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.levelFourCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelFourCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelFourCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelFourCode.GDgameTileObjects2[k] = gdjs.levelFourCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFourCode.GDgameTileObjects2[k] = gdjs.levelFourCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFourCode.GDgameTileObjects2 */
{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].returnVariable(gdjs.levelFourCode.GDgameTileObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelFourCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelFourCode.GDfooterObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects2Objects, "Physics2", gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDfooterObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects2[i].getVariableBoolean(gdjs.levelFourCode.GDgameTileObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.levelFourCode.GDgameTileObjects2[k] = gdjs.levelFourCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFourCode.GDgameTileObjects2[k] = gdjs.levelFourCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFourCode.GDgameTileObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelFourCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("footer"), gdjs.levelFourCode.GDfooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects1Objects, "Physics2", gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDfooterObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects1.length;i<l;++i) {
    if ( !(gdjs.levelFourCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.levelFourCode.GDgameTileObjects1[k] = gdjs.levelFourCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFourCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects1[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelFourCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.levelFourCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setString("Level 4");
}{runtimeScene.getGame().getVariables().getFromIndex(20).setString("levelFour");
}{runtimeScene.getGame().getVariables().getFromIndex(21).setString("levelFive");
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
}{runtimeScene.getGame().getVariables().getFromIndex(35).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(30).setBoolean(true);
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


};gdjs.levelFourCode.eventsList11 = function(runtimeScene) {

{

gdjs.levelFourCode.GDgameTileObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelFourCode.GDgameTileObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects2[i].getX() > 532 ) {
        isConditionTrue_1 = true;
        gdjs.levelFourCode.GDgameTileObjects2[k] = gdjs.levelFourCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelFourCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelFourCode.GDgameTileObjects1_1final.indexOf(gdjs.levelFourCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelFourCode.GDgameTileObjects1_1final.push(gdjs.levelFourCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects2.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects2[i].getX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.levelFourCode.GDgameTileObjects2[k] = gdjs.levelFourCode.GDgameTileObjects2[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelFourCode.GDgameTileObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelFourCode.GDgameTileObjects1_1final.indexOf(gdjs.levelFourCode.GDgameTileObjects2[j]) === -1 )
            gdjs.levelFourCode.GDgameTileObjects1_1final.push(gdjs.levelFourCode.GDgameTileObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelFourCode.GDgameTileObjects1_1final, gdjs.levelFourCode.GDgameTileObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFourCode.GDgameTileObjects1 */
{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects1[i].setPosition(gdjs.randomInRange(0, 532),-(188));
}
}}

}


};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects1Objects = Hashtable.newFrom({"gameTile": gdjs.levelFourCode.GDgameTileObjects1});
gdjs.levelFourCode.asyncCallback13829020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFourCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects3);

{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects3.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.levelFourCode.localVariables.length = 0;
}
gdjs.levelFourCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFourCode.localVariables);
for (const obj of gdjs.levelFourCode.GDgameTileObjects2) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.levelFourCode.asyncCallback13829020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFourCode.asyncCallback13828164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.levelFourCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "sandExplosion.ogg", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.4, 0.2, 0.2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects2[i].getBehavior("Animation").setAnimationIndex(47);
}
}
{ //Subevents
gdjs.levelFourCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.levelFourCode.localVariables.length = 0;
}
gdjs.levelFourCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.levelFourCode.GDgameTileObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.levelFourCode.localVariables);
for (const obj of gdjs.levelFourCode.GDgameTileObjects1) asyncObjectsList.addObject("gameTile", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((1070 - (( gdjs.levelFourCode.GDgameTileObjects1.length === 0 ) ? 0 :gdjs.levelFourCode.GDgameTileObjects1[0].getPointY(""))) / 2140), (runtimeScene) => (gdjs.levelFourCode.asyncCallback13828164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.levelFourCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gameTile"), gdjs.levelFourCode.GDgameTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDgameTileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelFourCode.GDgameTileObjects1.length;i<l;++i) {
    if ( gdjs.levelFourCode.GDgameTileObjects1[i].getBehavior("Animation").getAnimationIndex() != runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.levelFourCode.GDgameTileObjects1[k] = gdjs.levelFourCode.GDgameTileObjects1[i];
        ++k;
    }
}
gdjs.levelFourCode.GDgameTileObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.levelFourCode.GDgameTileObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.levelFourCode.GDgameTileObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDgameTileObjects1[i].getBehavior("Tween").addObjectPositionYTween2("incorrectSlam", 1070, "linear", (1070 - (gdjs.levelFourCode.GDgameTileObjects1[i].getPointY(""))) / 2140, false);
}
}
{ //Subevents
gdjs.levelFourCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.levelFourCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star3"), gdjs.levelFourCode.GDstar3Objects2);
{for(var i = 0, len = gdjs.levelFourCode.GDstar3Objects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDstar3Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.levelFourCode.GDstar2Objects2);
{for(var i = 0, len = gdjs.levelFourCode.GDstar2Objects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDstar2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.levelFourCode.GDstar1Objects1);
{for(var i = 0, len = gdjs.levelFourCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDstar1Objects1[i].hide();
}
}}

}


};gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDbackButtonObjects2Objects = Hashtable.newFrom({"backButton": gdjs.levelFourCode.GDbackButtonObjects2});
gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDpauseButtonObjects2Objects = Hashtable.newFrom({"pauseButton": gdjs.levelFourCode.GDpauseButtonObjects2});
gdjs.levelFourCode.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelFourCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelFourCode.GDpauseWordObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(24);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{for(var i = 0, len = gdjs.levelFourCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDPauseScreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelFourCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDpauseWordObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.levelFourCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDPauseScreenObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answersNeededText"), gdjs.levelFourCode.GDanswersNeededTextObjects2);
{for(var i = 0, len = gdjs.levelFourCode.GDanswersNeededTextObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDanswersNeededTextObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(17).getAsString() + "/" + runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.levelFourCode.GDbackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDbackButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseButton"), gdjs.levelFourCode.GDpauseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFourCode.mapOfGDgdjs_9546levelFourCode_9546GDpauseButtonObjects2Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelFourCode.GDPauseScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelFourCode.GDpauseWordObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.levelFourCode.GDpauseWordObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDpauseWordObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.levelFourCode.GDPauseScreenObjects2.length ;i < len;++i) {
    gdjs.levelFourCode.GDPauseScreenObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.levelFourCode.GDPauseScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("pauseWord"), gdjs.levelFourCode.GDpauseWordObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.levelFourCode.GDpauseWordObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDpauseWordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.levelFourCode.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.levelFourCode.GDPauseScreenObjects1[i].hide();
}
}}

}


};gdjs.levelFourCode.eventsList17 = function(runtimeScene) {

{



}


{


gdjs.levelFourCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.levelFourCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.levelFourCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.levelFourCode.eventsList9(runtimeScene);
}


{



}


{


gdjs.levelFourCode.eventsList10(runtimeScene);
}


{


gdjs.levelFourCode.eventsList11(runtimeScene);
}


{


gdjs.levelFourCode.eventsList14(runtimeScene);
}


{


gdjs.levelFourCode.eventsList15(runtimeScene);
}


{



}


{


gdjs.levelFourCode.eventsList16(runtimeScene);
}


};

gdjs.levelFourCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelFourCode.GDNewTextObjects1.length = 0;
gdjs.levelFourCode.GDNewTextObjects2.length = 0;
gdjs.levelFourCode.GDNewTextObjects3.length = 0;
gdjs.levelFourCode.GDNewText2Objects1.length = 0;
gdjs.levelFourCode.GDNewText2Objects2.length = 0;
gdjs.levelFourCode.GDNewText2Objects3.length = 0;
gdjs.levelFourCode.GDNewText3Objects1.length = 0;
gdjs.levelFourCode.GDNewText3Objects2.length = 0;
gdjs.levelFourCode.GDNewText3Objects3.length = 0;
gdjs.levelFourCode.GDgameTileObjects1.length = 0;
gdjs.levelFourCode.GDgameTileObjects2.length = 0;
gdjs.levelFourCode.GDgameTileObjects3.length = 0;
gdjs.levelFourCode.GDsplatObjects1.length = 0;
gdjs.levelFourCode.GDsplatObjects2.length = 0;
gdjs.levelFourCode.GDsplatObjects3.length = 0;
gdjs.levelFourCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelFourCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelFourCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelFourCode.GDfooterObjects1.length = 0;
gdjs.levelFourCode.GDfooterObjects2.length = 0;
gdjs.levelFourCode.GDfooterObjects3.length = 0;
gdjs.levelFourCode.GDbackgroundObjects1.length = 0;
gdjs.levelFourCode.GDbackgroundObjects2.length = 0;
gdjs.levelFourCode.GDbackgroundObjects3.length = 0;
gdjs.levelFourCode.GDbackButtonObjects1.length = 0;
gdjs.levelFourCode.GDbackButtonObjects2.length = 0;
gdjs.levelFourCode.GDbackButtonObjects3.length = 0;
gdjs.levelFourCode.GDpauseButtonObjects1.length = 0;
gdjs.levelFourCode.GDpauseButtonObjects2.length = 0;
gdjs.levelFourCode.GDpauseButtonObjects3.length = 0;
gdjs.levelFourCode.GDstarHolderObjects1.length = 0;
gdjs.levelFourCode.GDstarHolderObjects2.length = 0;
gdjs.levelFourCode.GDstarHolderObjects3.length = 0;
gdjs.levelFourCode.GDstar1Objects1.length = 0;
gdjs.levelFourCode.GDstar1Objects2.length = 0;
gdjs.levelFourCode.GDstar1Objects3.length = 0;
gdjs.levelFourCode.GDstar2Objects1.length = 0;
gdjs.levelFourCode.GDstar2Objects2.length = 0;
gdjs.levelFourCode.GDstar2Objects3.length = 0;
gdjs.levelFourCode.GDstar3Objects1.length = 0;
gdjs.levelFourCode.GDstar3Objects2.length = 0;
gdjs.levelFourCode.GDstar3Objects3.length = 0;
gdjs.levelFourCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelFourCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelFourCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelFourCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelFourCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelFourCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelFourCode.GDpauseWordObjects1.length = 0;
gdjs.levelFourCode.GDpauseWordObjects2.length = 0;
gdjs.levelFourCode.GDpauseWordObjects3.length = 0;
gdjs.levelFourCode.GDPauseScreenObjects1.length = 0;
gdjs.levelFourCode.GDPauseScreenObjects2.length = 0;
gdjs.levelFourCode.GDPauseScreenObjects3.length = 0;
gdjs.levelFourCode.GDCloudObjects1.length = 0;
gdjs.levelFourCode.GDCloudObjects2.length = 0;
gdjs.levelFourCode.GDCloudObjects3.length = 0;
gdjs.levelFourCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelFourCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelFourCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelFourCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelFourCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelFourCode.GDLevelSixheaderTimerObjects3.length = 0;

gdjs.levelFourCode.eventsList17(runtimeScene);
gdjs.levelFourCode.GDNewTextObjects1.length = 0;
gdjs.levelFourCode.GDNewTextObjects2.length = 0;
gdjs.levelFourCode.GDNewTextObjects3.length = 0;
gdjs.levelFourCode.GDNewText2Objects1.length = 0;
gdjs.levelFourCode.GDNewText2Objects2.length = 0;
gdjs.levelFourCode.GDNewText2Objects3.length = 0;
gdjs.levelFourCode.GDNewText3Objects1.length = 0;
gdjs.levelFourCode.GDNewText3Objects2.length = 0;
gdjs.levelFourCode.GDNewText3Objects3.length = 0;
gdjs.levelFourCode.GDgameTileObjects1.length = 0;
gdjs.levelFourCode.GDgameTileObjects2.length = 0;
gdjs.levelFourCode.GDgameTileObjects3.length = 0;
gdjs.levelFourCode.GDsplatObjects1.length = 0;
gdjs.levelFourCode.GDsplatObjects2.length = 0;
gdjs.levelFourCode.GDsplatObjects3.length = 0;
gdjs.levelFourCode.GDincorrectAnswerObjects1.length = 0;
gdjs.levelFourCode.GDincorrectAnswerObjects2.length = 0;
gdjs.levelFourCode.GDincorrectAnswerObjects3.length = 0;
gdjs.levelFourCode.GDfooterObjects1.length = 0;
gdjs.levelFourCode.GDfooterObjects2.length = 0;
gdjs.levelFourCode.GDfooterObjects3.length = 0;
gdjs.levelFourCode.GDbackgroundObjects1.length = 0;
gdjs.levelFourCode.GDbackgroundObjects2.length = 0;
gdjs.levelFourCode.GDbackgroundObjects3.length = 0;
gdjs.levelFourCode.GDbackButtonObjects1.length = 0;
gdjs.levelFourCode.GDbackButtonObjects2.length = 0;
gdjs.levelFourCode.GDbackButtonObjects3.length = 0;
gdjs.levelFourCode.GDpauseButtonObjects1.length = 0;
gdjs.levelFourCode.GDpauseButtonObjects2.length = 0;
gdjs.levelFourCode.GDpauseButtonObjects3.length = 0;
gdjs.levelFourCode.GDstarHolderObjects1.length = 0;
gdjs.levelFourCode.GDstarHolderObjects2.length = 0;
gdjs.levelFourCode.GDstarHolderObjects3.length = 0;
gdjs.levelFourCode.GDstar1Objects1.length = 0;
gdjs.levelFourCode.GDstar1Objects2.length = 0;
gdjs.levelFourCode.GDstar1Objects3.length = 0;
gdjs.levelFourCode.GDstar2Objects1.length = 0;
gdjs.levelFourCode.GDstar2Objects2.length = 0;
gdjs.levelFourCode.GDstar2Objects3.length = 0;
gdjs.levelFourCode.GDstar3Objects1.length = 0;
gdjs.levelFourCode.GDstar3Objects2.length = 0;
gdjs.levelFourCode.GDstar3Objects3.length = 0;
gdjs.levelFourCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelFourCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelFourCode.GDcorrectWordTextObjects3.length = 0;
gdjs.levelFourCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelFourCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelFourCode.GDanswersNeededTextObjects3.length = 0;
gdjs.levelFourCode.GDpauseWordObjects1.length = 0;
gdjs.levelFourCode.GDpauseWordObjects2.length = 0;
gdjs.levelFourCode.GDpauseWordObjects3.length = 0;
gdjs.levelFourCode.GDPauseScreenObjects1.length = 0;
gdjs.levelFourCode.GDPauseScreenObjects2.length = 0;
gdjs.levelFourCode.GDPauseScreenObjects3.length = 0;
gdjs.levelFourCode.GDCloudObjects1.length = 0;
gdjs.levelFourCode.GDCloudObjects2.length = 0;
gdjs.levelFourCode.GDCloudObjects3.length = 0;
gdjs.levelFourCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelFourCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelFourCode.GDLevelSixTimeObjects3.length = 0;
gdjs.levelFourCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelFourCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelFourCode.GDLevelSixheaderTimerObjects3.length = 0;


return;

}

gdjs['levelFourCode'] = gdjs.levelFourCode;

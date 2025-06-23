gdjs.levelFailedScreenCode = {};
gdjs.levelFailedScreenCode.localVariables = [];
gdjs.levelFailedScreenCode.GDstar4Objects1= [];
gdjs.levelFailedScreenCode.GDstar4Objects2= [];
gdjs.levelFailedScreenCode.GDstar5Objects1= [];
gdjs.levelFailedScreenCode.GDstar5Objects2= [];
gdjs.levelFailedScreenCode.GDstar6Objects1= [];
gdjs.levelFailedScreenCode.GDstar6Objects2= [];
gdjs.levelFailedScreenCode.GDstar7Objects1= [];
gdjs.levelFailedScreenCode.GDstar7Objects2= [];
gdjs.levelFailedScreenCode.GDyouFailedObjects1= [];
gdjs.levelFailedScreenCode.GDyouFailedObjects2= [];
gdjs.levelFailedScreenCode.GDnextButtonObjects1= [];
gdjs.levelFailedScreenCode.GDnextButtonObjects2= [];
gdjs.levelFailedScreenCode.GDreplayButtonObjects1= [];
gdjs.levelFailedScreenCode.GDreplayButtonObjects2= [];
gdjs.levelFailedScreenCode.GDgameTileObjects1= [];
gdjs.levelFailedScreenCode.GDgameTileObjects2= [];
gdjs.levelFailedScreenCode.GDsplatObjects1= [];
gdjs.levelFailedScreenCode.GDsplatObjects2= [];
gdjs.levelFailedScreenCode.GDfooterObjects1= [];
gdjs.levelFailedScreenCode.GDfooterObjects2= [];
gdjs.levelFailedScreenCode.GDbackgroundObjects1= [];
gdjs.levelFailedScreenCode.GDbackgroundObjects2= [];
gdjs.levelFailedScreenCode.GDbackButtonObjects1= [];
gdjs.levelFailedScreenCode.GDbackButtonObjects2= [];
gdjs.levelFailedScreenCode.GDpauseButtonObjects1= [];
gdjs.levelFailedScreenCode.GDpauseButtonObjects2= [];
gdjs.levelFailedScreenCode.GDstarHolderObjects1= [];
gdjs.levelFailedScreenCode.GDstarHolderObjects2= [];
gdjs.levelFailedScreenCode.GDstar1Objects1= [];
gdjs.levelFailedScreenCode.GDstar1Objects2= [];
gdjs.levelFailedScreenCode.GDstar2Objects1= [];
gdjs.levelFailedScreenCode.GDstar2Objects2= [];
gdjs.levelFailedScreenCode.GDstar3Objects1= [];
gdjs.levelFailedScreenCode.GDstar3Objects2= [];
gdjs.levelFailedScreenCode.GDcorrectWordTextObjects1= [];
gdjs.levelFailedScreenCode.GDcorrectWordTextObjects2= [];
gdjs.levelFailedScreenCode.GDanswersNeededTextObjects1= [];
gdjs.levelFailedScreenCode.GDanswersNeededTextObjects2= [];
gdjs.levelFailedScreenCode.GDpauseWordObjects1= [];
gdjs.levelFailedScreenCode.GDpauseWordObjects2= [];
gdjs.levelFailedScreenCode.GDPauseScreenObjects1= [];
gdjs.levelFailedScreenCode.GDPauseScreenObjects2= [];
gdjs.levelFailedScreenCode.GDCloudObjects1= [];
gdjs.levelFailedScreenCode.GDCloudObjects2= [];
gdjs.levelFailedScreenCode.GDLevelSixTimeObjects1= [];
gdjs.levelFailedScreenCode.GDLevelSixTimeObjects2= [];
gdjs.levelFailedScreenCode.GDLevelSixheaderTimerObjects1= [];
gdjs.levelFailedScreenCode.GDLevelSixheaderTimerObjects2= [];
gdjs.levelFailedScreenCode.GDquestionMarkObjects1= [];
gdjs.levelFailedScreenCode.GDquestionMarkObjects2= [];


gdjs.levelFailedScreenCode.mapOfGDgdjs_9546levelFailedScreenCode_9546GDreplayButtonObjects1Objects = Hashtable.newFrom({"replayButton": gdjs.levelFailedScreenCode.GDreplayButtonObjects1});
gdjs.levelFailedScreenCode.mapOfGDgdjs_9546levelFailedScreenCode_9546GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.levelFailedScreenCode.GDbackButtonObjects1});
gdjs.levelFailedScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.levelFailedScreenCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("star4"), gdjs.levelFailedScreenCode.GDstar4Objects1);
{for(var i = 0, len = gdjs.levelFailedScreenCode.GDstar4Objects1.length ;i < len;++i) {
    gdjs.levelFailedScreenCode.GDstar4Objects1[i].getBehavior("Opacity").setOpacity(130);
}
}{for(var i = 0, len = gdjs.levelFailedScreenCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.levelFailedScreenCode.GDbackgroundObjects1[i].getBehavior("Opacity").setOpacity(180);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("replayButton"), gdjs.levelFailedScreenCode.GDreplayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFailedScreenCode.mapOfGDgdjs_9546levelFailedScreenCode_9546GDreplayButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(20).getAsString(), false);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.levelFailedScreenCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.levelFailedScreenCode.mapOfGDgdjs_9546levelFailedScreenCode_9546GDbackButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "levelMenuScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}}

}


};

gdjs.levelFailedScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelFailedScreenCode.GDstar4Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar4Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar5Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar5Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar6Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar6Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar7Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar7Objects2.length = 0;
gdjs.levelFailedScreenCode.GDyouFailedObjects1.length = 0;
gdjs.levelFailedScreenCode.GDyouFailedObjects2.length = 0;
gdjs.levelFailedScreenCode.GDnextButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDnextButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDreplayButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDreplayButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDgameTileObjects1.length = 0;
gdjs.levelFailedScreenCode.GDgameTileObjects2.length = 0;
gdjs.levelFailedScreenCode.GDsplatObjects1.length = 0;
gdjs.levelFailedScreenCode.GDsplatObjects2.length = 0;
gdjs.levelFailedScreenCode.GDfooterObjects1.length = 0;
gdjs.levelFailedScreenCode.GDfooterObjects2.length = 0;
gdjs.levelFailedScreenCode.GDbackgroundObjects1.length = 0;
gdjs.levelFailedScreenCode.GDbackgroundObjects2.length = 0;
gdjs.levelFailedScreenCode.GDbackButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDbackButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDpauseButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDpauseButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDstarHolderObjects1.length = 0;
gdjs.levelFailedScreenCode.GDstarHolderObjects2.length = 0;
gdjs.levelFailedScreenCode.GDstar1Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar1Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar2Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar2Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar3Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar3Objects2.length = 0;
gdjs.levelFailedScreenCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelFailedScreenCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelFailedScreenCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelFailedScreenCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelFailedScreenCode.GDpauseWordObjects1.length = 0;
gdjs.levelFailedScreenCode.GDpauseWordObjects2.length = 0;
gdjs.levelFailedScreenCode.GDPauseScreenObjects1.length = 0;
gdjs.levelFailedScreenCode.GDPauseScreenObjects2.length = 0;
gdjs.levelFailedScreenCode.GDCloudObjects1.length = 0;
gdjs.levelFailedScreenCode.GDCloudObjects2.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelFailedScreenCode.GDquestionMarkObjects1.length = 0;
gdjs.levelFailedScreenCode.GDquestionMarkObjects2.length = 0;

gdjs.levelFailedScreenCode.eventsList0(runtimeScene);
gdjs.levelFailedScreenCode.GDstar4Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar4Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar5Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar5Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar6Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar6Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar7Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar7Objects2.length = 0;
gdjs.levelFailedScreenCode.GDyouFailedObjects1.length = 0;
gdjs.levelFailedScreenCode.GDyouFailedObjects2.length = 0;
gdjs.levelFailedScreenCode.GDnextButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDnextButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDreplayButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDreplayButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDgameTileObjects1.length = 0;
gdjs.levelFailedScreenCode.GDgameTileObjects2.length = 0;
gdjs.levelFailedScreenCode.GDsplatObjects1.length = 0;
gdjs.levelFailedScreenCode.GDsplatObjects2.length = 0;
gdjs.levelFailedScreenCode.GDfooterObjects1.length = 0;
gdjs.levelFailedScreenCode.GDfooterObjects2.length = 0;
gdjs.levelFailedScreenCode.GDbackgroundObjects1.length = 0;
gdjs.levelFailedScreenCode.GDbackgroundObjects2.length = 0;
gdjs.levelFailedScreenCode.GDbackButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDbackButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDpauseButtonObjects1.length = 0;
gdjs.levelFailedScreenCode.GDpauseButtonObjects2.length = 0;
gdjs.levelFailedScreenCode.GDstarHolderObjects1.length = 0;
gdjs.levelFailedScreenCode.GDstarHolderObjects2.length = 0;
gdjs.levelFailedScreenCode.GDstar1Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar1Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar2Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar2Objects2.length = 0;
gdjs.levelFailedScreenCode.GDstar3Objects1.length = 0;
gdjs.levelFailedScreenCode.GDstar3Objects2.length = 0;
gdjs.levelFailedScreenCode.GDcorrectWordTextObjects1.length = 0;
gdjs.levelFailedScreenCode.GDcorrectWordTextObjects2.length = 0;
gdjs.levelFailedScreenCode.GDanswersNeededTextObjects1.length = 0;
gdjs.levelFailedScreenCode.GDanswersNeededTextObjects2.length = 0;
gdjs.levelFailedScreenCode.GDpauseWordObjects1.length = 0;
gdjs.levelFailedScreenCode.GDpauseWordObjects2.length = 0;
gdjs.levelFailedScreenCode.GDPauseScreenObjects1.length = 0;
gdjs.levelFailedScreenCode.GDPauseScreenObjects2.length = 0;
gdjs.levelFailedScreenCode.GDCloudObjects1.length = 0;
gdjs.levelFailedScreenCode.GDCloudObjects2.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixTimeObjects1.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixTimeObjects2.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixheaderTimerObjects1.length = 0;
gdjs.levelFailedScreenCode.GDLevelSixheaderTimerObjects2.length = 0;
gdjs.levelFailedScreenCode.GDquestionMarkObjects1.length = 0;
gdjs.levelFailedScreenCode.GDquestionMarkObjects2.length = 0;


return;

}

gdjs['levelFailedScreenCode'] = gdjs.levelFailedScreenCode;

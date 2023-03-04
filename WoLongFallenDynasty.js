Hub.Handler.Version = 5;
Hub.Handler.Id = "pCMjDD7McquokK3ky";
Hub.Maintainer.Name = "frozenbeaver";
Hub.Maintainer.Id = "PKW8fDRgHFm6aPaYK";

Game.ExecutableContext = ["archive","motor_package"];
Game.KillMutex = ["DBWinMutex", "Trine", "Trine", "CDdf212806D6EmB31yE0c", "CDdf212806D6EmB31yE0c"];
Game.Description =
  "WORKS ONLY WITH THE STEAM VERSION, tested on the latest update (1.28.06), low your settings and limit your fps to 30 for better performance, to connect the instances you have to finish the tutorial, play until you are in the world map, select the tori gate, create a match then join on the other instances (make sure you have crossplay disabled). To play with keyboard and mouse wait until all instances opens and press the END key to lock the inputs, click a couple of times for the cursor to show on your screen, to hide or show the cursor use the home key.";
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.HandlerInterval = 150;
Game.KillMutexType = "Mutant";
Game.KillMutexDelay = 20;
Game.PartialMutexSearch = true;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "WoLong.exe";
Game.SteamID = "1448440";
Game.GUID = "WoLongFallenDynasty";
Game.GameName = "Wo Long: Fallen Dynasty";
Game.MaxPlayers = 3;
Game.MaxPlayersOneMonitor = 4;
Game.UseGoldberg = true;
Game.LauncherTitle = "";
Game.UserProfileSavePath = "Documents\\KoeiTecmo\\Wolong\\Savedata";
Game.UserProfileConfigPath = "Documents\\KoeiTecmo\\Wolong";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Wo Long: Fallen Dynasty";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_4.dll"];
Game.PauseBetweenContextAndLaunch = 10;
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.KeepSymLinkOnExit = false;
Game.HookInit = true;
Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

Game.HookFocus = true;

//ProtoInput

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.CursorVisibilityHook = false; // cahnged for toggle key hidecursor
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = true; //enables toggle key
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.DontShowCursorWhenImageUpdated = false;
Game.ProtoInput.SetWindowPosHook = false;
Game.ProtoInput.SetWindowStyleHook = false;
Game.ProtoInput.FindWindowHook = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {
  var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\start.bat";
  var lines = [
    '"' + Game.folder + '\\Steamless.CLI.exe" --quiet --keepbind ' + '"' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\WoLong.exe"',
    'move /y "WoLong.exe.unpacked.exe" "WoLong.exe"'
  ];
  Context.WriteTextFile(Bat, lines);

  Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\start.bat"], false, 1);

  var dir = Context.NucleusUserRoot + "\\Documents\\KoeiTecmo\\Wolong\\Savedata";
  var path = Context.NucleusUserRoot + "\\Documents\\KoeiTecmo\\Wolong\\Savedata\\graphics_option.json";
  if (!System.IO.File.Exists(path)) {
    System.IO.Directory.CreateDirectory(dir);
    var lines = [
      '{"config_type":"MIDDLE","game_mode":"RESOLUTION_PRIORITY","fps":"60","display_mode":"WINDOW","resolution":"1280x720","vsync":"OFF","rendering_resolution":"100%","texture_detail":"NORMAL","shadow_quality":"NORMAL","shadow_distance":"NORMAL","ambient_occlusion":"ON","screen_space_reflection":"ON","subsurface_scattering":"ON","model_lod":"NORMAL","volumetric_fog":"NORMAL","volumetric_cloud":"NORMAL","motion_blur":"ON","chromatic_aberration":"ON","film_grain":"ON","dof":"ON","lens_flare":"ON"}'
    ];
    Context.WriteTextFile(path, lines);
  }
};

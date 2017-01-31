/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
"use strict";

import { commands, ExtensionContext } from "vscode";
import { CommandNames, TfvcCommandNames } from "./helpers/constants";
import { ExtensionManager } from "./extensionmanager";

let _extensionManager: ExtensionManager;

export function activate(context: ExtensionContext) {
    _extensionManager = new ExtensionManager();

    context.subscriptions.push(commands.registerCommand(CommandNames.GetPullRequests, () => _extensionManager.Team.GetMyPullRequests()));
    context.subscriptions.push(commands.registerCommand(CommandNames.Login, () => _extensionManager.Team.Login()));
    context.subscriptions.push(commands.registerCommand(CommandNames.Logout, () => _extensionManager.Team.Logout()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenBlamePage, () => _extensionManager.Team.OpenBlamePage()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenBuildSummaryPage, () => _extensionManager.Team.OpenBuildSummaryPage()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenFileHistory, () => _extensionManager.Team.OpenFileHistory()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenNewBug, () => _extensionManager.Team.OpenNewBug()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenNewPullRequest, () => _extensionManager.Team.OpenNewPullRequest()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenNewTask, () => _extensionManager.Team.OpenNewTask()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenNewWorkItem, () => _extensionManager.Team.OpenNewWorkItem()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenPullRequestsPage, () => _extensionManager.Team.OpenPullRequestsPage()));
    context.subscriptions.push(commands.registerCommand(CommandNames.OpenTeamSite, () => _extensionManager.Team.OpenTeamProjectWebSite()));
    context.subscriptions.push(commands.registerCommand(CommandNames.ViewWorkItems, () => _extensionManager.Team.ViewMyWorkItems()));
    context.subscriptions.push(commands.registerCommand(CommandNames.ViewPinnedQueryWorkItems, () => _extensionManager.Team.ViewPinnedQueryWorkItems()));
    context.subscriptions.push(commands.registerCommand(CommandNames.ViewWorkItemQueries, () => _extensionManager.Team.ViewWorkItems()));
    context.subscriptions.push(commands.registerCommand(CommandNames.SendFeedback, () => _extensionManager.Team.SendFeedback()));
    context.subscriptions.push(commands.registerCommand(CommandNames.RefreshPollingStatus, () => _extensionManager.Team.RefreshPollingStatus()));
    context.subscriptions.push(commands.registerCommand(CommandNames.Reinitialize, () => _extensionManager.Reinitialize()));

    // TFVC Commands
    context.subscriptions.push(commands.registerCommand(TfvcCommandNames.Status, () => _extensionManager.Tfvc.TfvcStatus()));
}

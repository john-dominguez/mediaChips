const path = require("path")
const FileSync = require('lowdb/adapters/FileSync')
const app = require('@electron/remote').app
const pathToDbSettings = path.join(app.getPath('userData'), 'userfiles/dbs.json')
const adapterSettings = new FileSync(pathToDbSettings)
const low = require('lowdb')
const dbs = low(adapterSettings)

import router from '@/router'
import Vuetify from '@/plugins/vuetify'

dbs.defaults({
  passwordProtection: false,
  phrase: '',
  passwordHint: '',
  videoPreviewStatic: 'thumb',
  videoPreviewHover: 'video',
  delayVideoPreview: 0,
  appColorLightPrimary: '#7059b7',
  appColorLightSecondary: '#e98700',
  appColorLightAccent: '#7059b7',
  appColorLightHeader: '#e1d6eb',
  appColorDarkPrimary: '#7059b7',
  appColorDarkSecondary: '#e98700',
  appColorDarkAccent: '#7059b7',
  appColorDarkHeader: '#4D3791',
  darkMode: false,
  headerGradient: true,
  headerGradientLight: 'linear-gradient(to right,#FFC766,#7480DD)',
  headerGradientDark: 'linear-gradient(to right,#B96E3E,#6A54B1)',
  textFont: 'Roboto',
  headerFont: 'Roboto',
  navigationSide: "1",
  numberOfPagesLimit: 7,
  videoCardSize: 3,
  selectedDisk: '',
  videoFilters: [],
  videoSortBy: 'name',
  videoSortDirection: 'asc',
  videoPage: 1,
  videoChipsColored: true,
  videoEditBtnHidden: false,
  videoFileNameHidden: false,
  videoFileInfoHidden: false,
  videoRatingHidden: false,
  videoFavoriteHidden: false,
  videoQualityLabelHidden: false,
  videoDurationHidden: false,
  ratingAndFavoriteInCard: false,
  metaAssignedToVideos: [],
  videoView: 0,
  videoVisibility: {},
  playlistFilters: [],
  playlistSortBy: 'name',
  playlistSortDirection: 'asc',
  playlistPage: 1,
  tabs: [],
  videosPerPage: 20,
  playlistsPerPage: 20,
  gapSize: 's',
  isPlayVideoInSystemPlayer: false,
  updateIntervalDataFromVideos: 30,
  autoUpdateDataFromVideos: true,
  updateDataAfterAddingNewVideos: true,
  updateDataFromVideosOnStart: false,
  typingFiltersDefault: false,
  countNumberOfViews: true,
  watchFolders: false,
  folders: [],
  zoom: 1,
  checkForUpdatesAtStartup: true,
  // Privacy settings - internet features disabled by default for user privacy
  allowInternetFeatures: false,
  allowUpdateChecking: false,
  allowMetadataScrapers: false,
  registration: '',
  colorScroll: false,
  tabBorders: true,
  showIconsOfMetaInEditingDialog: true,
  showAdultContent: true,
  showEmptyMetaValueInCard: true,
  showIconsInsteadTextOnFiltersChips: false,
  showHeaderImageAboveProfile: true,
  showExperimentalFeatures: false,
  showSavedFilters: true,
  databaseVersion: app.getVersion(),
  // Privacy settings - internet features disabled by default for user privacy
  allowInternetFeatures: false,
  allowUpdateChecking: false,
  allowMetadataScrapers: false,
  widgets: {}
}).write()

const Settings = {
  state: () => ({
    passwordProtection: dbs.get('passwordProtection').value(),
    phrase: dbs.get('phrase').value(),
    passwordConfirmed: false,
    passwordHint: dbs.get('passwordHint').value(),
    videoPreviewStatic: dbs.get('videoPreviewStatic').value(),
    videoPreviewHover: dbs.get('videoPreviewHover').value(),
    delayVideoPreview: dbs.get('delayVideoPreview').value(),
    darkMode: dbs.get('darkMode').value(),
    headerGradient: dbs.get('headerGradient').value(),
    headerGradientLight: dbs.get('headerGradientLight').value(),
    headerGradientDark: dbs.get('headerGradientDark').value(),
    navigationSide: dbs.get('navigationSide').value(),
    appColorLightPrimary: dbs.get('appColorLightPrimary').value(),
    appColorLightSecondary: dbs.get('appColorLightSecondary').value(),
    appColorLightAccent: dbs.get('appColorLightAccent').value(),
    appColorLightHeader: dbs.get('appColorLightHeader').value(),
    appColorDarkPrimary: dbs.get('appColorDarkPrimary').value(),
    appColorDarkSecondary: dbs.get('appColorDarkSecondary').value(),
    appColorDarkAccent: dbs.get('appColorDarkAccent').value(),
    appColorDarkHeader: dbs.get('appColorDarkHeader').value(),
    textFont: dbs.get('textFont').value(),
    headerFont: dbs.get('headerFont').value(),
    lastChanged: Date.now(),
    numberOfPagesLimit: dbs.get('numberOfPagesLimit').value(),
    dialogScanVideos: false,
    scanProcRun: false,
    ratingAndFavoriteInCard: dbs.get('ratingAndFavoriteInCard').value(),
    selectedDisk: dbs.get('selectedDisk').value() || '',
    videoFilters: [],
    videoSortBy: 'name',
    videoSortDirection: 'asc',
    videoPage: 1,
    videosPerPage: dbs.get('videosPerPage').value() || 20,
    videoCardSize: dbs.get('videoCardSize').value(),
    videoChipsColored: dbs.get('videoChipsColored').value() || true,
    videoEditBtnHidden: dbs.get('videoEditBtnHidden').value() || false,
    videoFileNameHidden: dbs.get('videoFileNameHidden').value() || false,
    videoFileInfoHidden: dbs.get('videoFileInfoHidden').value() || false,
    videoRatingHidden: dbs.get('videoRatingHidden').value() || false,
    videoFavoriteHidden: dbs.get('videoFavoriteHidden').value() || false,
    videoQualityLabelHidden: dbs.get('videoQualityLabelHidden').value() || false,
    videoDurationHidden: dbs.get('videoDurationHidden').value() || false,
    metaAssignedToVideos: dbs.get('metaAssignedToVideos').value(),
    videoView: dbs.get('videoView').value(),
    videoVisibility: dbs.get('videoVisibility').value(),
    playlistsPerPage: dbs.get('playlistsPerPage').value() || 20,
    playlistFilters: [],
    playlistSortBy: 'name',
    playlistSortDirection: 'asc',
    playlistPage: 1,
    tab: null,
    tabs: _.cloneDeep(dbs.get('tabs').value()),
    gapSize: dbs.get('gapSize').value(),
    isPlayVideoInSystemPlayer: dbs.get('isPlayVideoInSystemPlayer').value(),
    updateIntervalDataFromVideos: dbs.get('updateIntervalDataFromVideos').value(),
    autoUpdateDataFromVideos: dbs.get('autoUpdateDataFromVideos').value(),
    updateDataAfterAddingNewVideos: dbs.get('updateDataAfterAddingNewVideos').value(),
    updateDataFromVideosOnStart: dbs.get('updateDataFromVideosOnStart').value(),
    typingFiltersDefault: dbs.get('typingFiltersDefault').value(),
    countNumberOfViews: dbs.get('countNumberOfViews').value(),
    watchFolders: dbs.get('watchFolders').value(),
    folders: dbs.get('folders').value(),
    zoom: dbs.get('zoom').value(),
    checkForUpdatesAtStartup: dbs.get('checkForUpdatesAtStartup').value(),
    // Privacy settings - internet features disabled by default
    allowInternetFeatures: dbs.get('allowInternetFeatures').value(),
    allowUpdateChecking: dbs.get('allowUpdateChecking').value(),
    allowMetadataScrapers: dbs.get('allowMetadataScrapers').value(),
    registration: dbs.get('registration').value(),
    colorScroll: dbs.get('colorScroll').value(),
    tabBorders: dbs.get('tabBorders').value(),
    showIconsOfMetaInEditingDialog: dbs.get('showIconsOfMetaInEditingDialog').value(),
    showAdultContent: dbs.get('showAdultContent').value(),
    showEmptyMetaValueInCard: dbs.get('showEmptyMetaValueInCard').value(),
    showIconsInsteadTextOnFiltersChips: dbs.get('showIconsInsteadTextOnFiltersChips').value(),
    showHeaderImageAboveProfile: dbs.get('showHeaderImageAboveProfile').value(),
    showExperimentalFeatures: dbs.get('showExperimentalFeatures').value(),
    showSavedFilters: dbs.get('showSavedFilters').value(),
    databaseVersion: dbs.get('databaseVersion').value(),
    widgets: dbs.get('widgets').value(),
  }),
  mutations: {
    closeTab(state, tabId) { state.tabs = _.filter(state.tabs, tab => tab.id !== tabId) },
    getTabsFromDb(state, tabs) { state.tabs = _.cloneDeep(dbs.get('tabs').value()) },
    updateSettingsState(state, name) { state[name] = dbs.get(name).cloneDeep().value() },
  },
  actions: {
    saveHeaderGradient({ state, commit, getters}, {gradient, themeDark}) {
      // console.log(themeDark)
      if (themeDark) {
        getters.settings.set('headerGradientDark', gradient).write()
        state.headerGradientDark = gradient
      } else {
        getters.settings.set('headerGradientLight', gradient).write()
        state.headerGradientLight = gradient
      }
    },
    addNewTab({state, rootState, commit, dispatch, getters}, tab) {
      getters.tabsDb.push(tab).write()
      state.tabs.push(tab)
    },
    closeTab({state, rootState, commit, dispatch, getters}, tabId) {
      let currentTab = getters.tabsDb.find({id: tabId}).value()
      if (currentTab) { // if tab is open
        if (currentTab.link === router.currentRoute.fullPath) {
          const numberTabs = getters.tabsDb.value().length
          if (numberTabs > 1) {
            const tabIndex = getters.tabsDb.findIndex({id: tabId}).value()
            if (numberTabs === tabIndex + 1) {
              router.push(getters.tabsDb.value()[tabIndex-1].link)
            } else {
              router.push(getters.tabsDb.value()[tabIndex+1].link)
            } 
          } else router.push('/home')
        }
      }
      getters.tabsDb.remove({id: tabId}).write()
      commit('closeTab', tabId)
    },
    updateSettingsState({state, rootState, commit, dispatch, getters}, {key, value}) {
      getters.settings.set(key, value).write()
      state[key] = value
    },
    updateVuetifyColor({state, rootState, commit, dispatch, getters}, {key, color, theme, type}) {
      getters.settings.set(key, color).write()
      state[key] = color
      Vuetify.framework.theme.themes[theme][type] = color
    },
  },
  getters: {
    dbs(state) { return state.lastChanged, dbs },
    settings(state, store) { return store.dbs },
    tabsDb(state, store) { return store.dbs.get('tabs') },
    tabs(state, store) { return state.tabs },
  }
}

export default Settings
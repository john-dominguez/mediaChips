<template>
  <div>
    <div class="headline text-h5 text-center pb-4">Privacy & Internet Features</div>
    
    <v-alert type="info" dense outlined class="mb-4">
      <v-icon left>mdi-shield-check</v-icon>
      Control what internet features are enabled to protect your privacy. All features are disabled by default.
    </v-alert>

    <v-card outlined class="pa-4">
      <v-card-title class="pb-2">
        <v-icon left>mdi-earth</v-icon>
        Internet Features Control
      </v-card-title>
      
      <v-card-text class="pt-0">
        <v-row>
          <v-col cols="12" sm="6">
            <div class="subtitle-1 mb-2">Master Switch</div>
            <v-switch v-model="allowInternetFeatures" 
              :label="allowInternetFeatures ? 'Internet features enabled' : 'Internet features disabled'"
              color="primary" inset hide-details
              class="mt-0 pt-0"/>
            <div class="caption text--secondary">
              Enable or disable all internet connectivity features at once
            </div>
          </v-col>
          
          <v-col cols="12" sm="6">
            <div class="subtitle-1 mb-2">Status Indicator</div>
            <v-chip :color="allowInternetFeatures ? 'orange' : 'green'" outlined small>
              <v-icon left small>{{ allowInternetFeatures ? 'mdi-earth' : 'mdi-shield-check' }}</v-icon>
              {{ allowInternetFeatures ? 'Internet features active' : 'Privacy protected' }}
            </v-chip>
            <div class="caption text--secondary mt-1">
              A globe icon will appear in the navbar when internet features are enabled
            </div>
          </v-col>
        </v-row>
        
        <v-divider class="my-4"></v-divider>
        
        <div class="subtitle-1 mb-3">Individual Feature Controls</div>
        
        <v-row>
          <v-col cols="12" md="6">
            <v-card outlined>
              <v-card-text class="pb-2">
                <div class="d-flex align-center mb-2">
                  <v-icon left>mdi-update</v-icon>
                  <span class="subtitle-2">Update Checking</span>
                </div>
                <v-switch v-model="allowUpdateChecking" 
                  :disabled="!allowInternetFeatures"
                  :label="allowUpdateChecking ? 'Enabled' : 'Disabled'"
                  color="primary" inset hide-details
                  class="mt-0 pt-0"/>
                <div class="caption text--secondary mt-1">
                  Check GitHub for new app versions. Connects to: github.com/fupdec/MediaChips
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          
          <v-col cols="12" md="6">
            <v-card outlined>
              <v-card-text class="pb-2">
                <div class="d-flex align-center mb-2">
                  <v-icon left>mdi-database-search</v-icon>
                  <span class="subtitle-2">Metadata Scrapers</span>
                </div>
                <v-switch v-model="allowMetadataScrapers" 
                  :disabled="!allowInternetFeatures"
                  :label="allowMetadataScrapers ? 'Enabled' : 'Disabled'"
                  color="primary" inset hide-details
                  class="mt-0 pt-0"/>
                <div class="caption text--secondary mt-1">
                  Fetch performer data and images. Connects to: freeones.com, iafd.com
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card outlined class="pa-4 mt-4">
      <v-card-title class="pb-2">
        <v-icon left>mdi-information</v-icon>
        What Data Is Accessed?
      </v-card-title>
      
      <v-card-text class="pt-0">
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div>
                <v-icon left>mdi-update</v-icon>
                Update Checking Details
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="ml-4">
                <li>Fetches public release information from GitHub</li>
                <li>Only checks version numbers and release dates</li>
                <li>No personal data is sent</li>
                <li>Can be manually triggered or run at startup</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div>
                <v-icon left>mdi-database-search</v-icon>
                Metadata Scraping Details
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="ml-4">
                <li>Fetches performer names, photos, and career information</li>
                <li>Downloads profile images to local storage</li>
                <li>All data is publicly available on the source websites</li>
                <li>Only activated manually by user request</li>
                <li>No personal data about you is transmitted</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  computed: {
    allowInternetFeatures: {
      get() { return this.$store.state.Settings.allowInternetFeatures },
      set(value) { 
        this.$store.dispatch('updateSettingsState', {key:'allowInternetFeatures', value})
        // If disabling internet features, disable all sub-features
        if (!value) {
          this.$store.dispatch('updateSettingsState', {key:'allowUpdateChecking', value: false})
          this.$store.dispatch('updateSettingsState', {key:'allowMetadataScrapers', value: false})
        }
      },
    },
    allowUpdateChecking: {
      get() { return this.$store.state.Settings.allowUpdateChecking },
      set(value) { this.$store.dispatch('updateSettingsState', {key:'allowUpdateChecking', value}) },
    },
    allowMetadataScrapers: {
      get() { return this.$store.state.Settings.allowMetadataScrapers },
      set(value) { this.$store.dispatch('updateSettingsState', {key:'allowMetadataScrapers', value}) },
    },
  },
}
</script>

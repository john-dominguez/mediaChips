<script>
import StringCrypto from 'string-crypto'
import { machineIdSync } from 'node-machine-id'

export default {
  data: () => ({
    domain: 'http://localhost/', // License domain disabled
    apiKey: 'DISABLED',
    secret: 'This is the longest password ever!',
    secretOptions: {
      salt: 'f23tlo23fvy9cjnv90j2fxkzasf398hgbjhsavz',
      iterations: 10,
      digest: 'sha512'
    },
  }),
  computed: {
    registration: {
      get() {
        if (this.$router) {
          if (this.$store.state.Settings.registration.length) 
          return JSON.parse(this.decrypt(this.$store.state.Settings.registration))
          else return ''
        } else {
          if (this.settingsDb) {
            if (this.settingsDb.registration.length)
            return JSON.parse(this.decrypt(this.settingsDb.registration))
            else return ''
          } else return ''
        }
      },
      set(value) {
        value = this.crypt(value)
        this.$store.dispatch('updateSettingsState', {key:'registration', value})
      },
    },
    reg() {
      return true // Always return true - registration bypass
    },
  },
  methods: {
    crypt(string) {
      const {encryptString} = new StringCrypto(this.secretOptions)
      return encryptString(string, this.secret)
    },
    decrypt(string) {
      const {decryptString} = new StringCrypto(this.secretOptions)
      return decryptString(string, this.secret)
    },
  },
}
</script>
<template>
  <form class="input-group my-3" @submit.prevent="$emit('onAddListItem')">
    <div class="col-11">
      <input
        :value="value"
        aria-label="Add your english word here..."
        class="form-control"
        placeholder="Put your words here bro..."
        type="text"
        @input="$emit('input', $event.target.value)"
      />
      <b-alert :show="!this.isValid" variant="danger" dismissible>{{this.emptyError}}</b-alert>
    </div>
    <span class="input-group-btn col-1">
      <button :disabled="!this.isSubmitable" class="btn btn-primary" type="submit">Shoot</button>
    </span>
  </form>
</template>

<script>
import CONSTANTS from "@/constants";
export default {
  name: "ListForm",

  props: {
    value: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isValid: true,
      isSubmitable: false,
      emptyError: CONSTANTS.ERROR_MESSAGE.LIST_EMPTY_MESSAGE
    };
  },

  created() {
    this.$on("input", val => {
      this.isValid = this.isSubmitable = val.length > 0;
    });
    this.$on("onAddListItem", () => {
      this.isValid = true;
      this.isSubmitable = false;
    });
  },

  methods: {
    fetchTextAssets() {
      fetch(CONSTANTS.ENDPOINT.GRID)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(result => {
          this.gridTextAssets = result;
        })
        .catch(error => {
          this.WarningMessageOpen = true;
          this.WarningMessageText = `${CONSTANTS.ERROR_MESSAGE.GRID_GET} ${error}`;
        });
    },
    handleWarningClose() {
      this.WarningMessageOpen = false;
      this.WarningMessageText = "";
    }
  }
};
</script>

<style scoped>
.col-11 {
  padding-left: 0px;
  padding-right: 0px;
  
}
/* .input-group{
  background-color: rgba(229, 255, 0, 0.945);
} */

</style>

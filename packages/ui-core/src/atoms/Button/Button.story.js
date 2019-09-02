import { storiesOf } from "@storybook/vue";
import Button from "./Button.vue";

storiesOf("Button", module)
  .add("with text", () => "<my-button>with text</my-button>")
  .add("with emoji", () => "<my-button>😀 😎 👍 💯</my-button>")
  .add("as a component", () => ({
    components: { Button },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));

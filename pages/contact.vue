<template>
  <div class="container">
    <h1>Get In touch</h1>
    <div class="form">
      <form action="">
        <div class="form-group">
          <label for="name">Enter your name*<span>(not required)</span></label>
          <input id="name" type="text" placeholder="name" />
        </div>
        <div class="form-group">
          <label for="email">Enter your email*(not required)</label>
          <input id="email" type="email" placeholder="email" />
        </div>
        <div class="form-groups">
          <label for="subject">Type of Inquiry</label>
          <select id="subject" name="subject" required>
            <option value="">Select your subject</option>
            <option
              v-for="(item, index) in subjects"
              :key="`${item}-${index}`"
              :value="item"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="message"
            required
          ></textarea>
        </div>
        <div class="form-group submit">
          <input type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjects: ['general', 'feedback', 'concerns', 'donations', 'charities'],
    }
  },
}
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

h1 {
  text-align: center;
  color: rgb(255, 255, 255);
  border-bottom: 1px solid $brand-red;
  border-bottom-width: thick;
  padding-bottom: 3px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}
.container {
  flex-direction: column;
  // justify-content: top;
  // align-items: top;
  margin: 0 auto;
}
.form {
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  //outline: 1px solid green;

  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 1024px;
  label {
    color: #fff;
  }
  input,
  textarea,
  select {
    width: 100%;
  }

  input[type='text'],
  input[type='email'],
  textarea,
  select {
    padding: 1rem;
    margin: 0 auto;
  }
  input[type='submit'] {
    width: 40%;
    margin: 0 auto;
    margin-top: 0.5rem;
    padding: 1rem;
    max-width: 200px;
    border-radius: 5px;
    background-color: $brand-red;
    color: #fff;
  }
}
option {
  background-color: #000;
  color: $lightest-grey;
}
.form-group {
  width: 100%;
  margin: 0.5rem auto;
}
.submit {
  @media screen and (min-width: 768px) {
    text-align: center;
  }
}
</style>

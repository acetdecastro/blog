// Checks if there is already a logged in user
// Redirects to home if false
export default function({ store, redirect }) {
  if (store.getters["auth/authenticated"]) {
    return redirect("/");
  }
}

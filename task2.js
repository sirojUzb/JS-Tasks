// I'll revise last tasks
const user = {
  name: "John",
  surName: "Doe",
  getFullName: function () {
    return `${this.name} ${this.surName}`;
  },
};
console.log(user.getFullName());

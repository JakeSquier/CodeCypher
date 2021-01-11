#seeds
User.destroy_all
Project.destroy_all
ProjectCode.destroy_all
CodeBlock.destroy_all
#users

u1 = User.create(username: "GM_Trap", password: "Newpass12!", email: "jacob.squier@gmail.com")

u2 = User.create(username: "flaca", password: "@Marci2020", email: "sarahleydi@gmail.com")

#projects

p1 = Project.create(user_id: u1.id, project_name: "Buttons", html: '<h1>hello</h1>', css: '', javascript: '', theme: 'dark')

p2 = Project.create(user_id: u2.id, project_name: "Text", html: '', css: '', javascript: '', theme: "light")

p3 = Project.create(user_id: u1.id, project_name: "Styles", html: '', css: '', javascript: '', theme: 'dark')

p4 = Project.create(user_id: u2.id, project_name: "Events", html: '', css: '', javascript: '', theme: "light")

p5 = Project.create(user_id: u1.id, project_name: "Colors", html: '', css: '', javascript: '', theme: 'dark')

p6 = Project.create(user_id: u2.id, project_name: "Card", html: '', css: '', javascript: '', theme: "light")

p7 = Project.create(user_id: u1.id, project_name: "Hover", html: '', css: '', javascript: '', theme: 'dark')

p8 = Project.create(user_id: u2.id, project_name: "Javascript", html: '', css: '', javascript: '', theme: "light")


#projectcodes

# pc1 = ProjectCode.create(project_id: p1.id, code: "console.log('cool')")

# pc1 = ProjectCode.create(project_id: p2.id, code: "console.log('poop')")

#codeblocks

# cb1 = CodeBlock.create(shaping: "shape", category: "basic", color_value: "red")

#completed signal

# puts "seeding complete"

#done!

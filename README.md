## List Courses

---

```graph
query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    description
    topic
    url
  }
}
```

```graph
query getSingleCoursesForTopic($courseTopic: String!) {
  courses(topic: $courseTopic) {
    id
    title
    description
    topic
    url
  }
}
```

## Updated Courses

---

```graph
mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields
  }
}
```

## Created a Fragment

---

```graph
fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
```

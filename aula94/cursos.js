const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]

const getTodosCursos = () => {
    return cursos
}

const getCurso = (i) => {
    return cursos[i]
}

export {getCurso, cursos}
export default getTodosCursos
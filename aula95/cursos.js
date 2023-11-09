class Cursos {
    static cursos = ["Javascript", "HTML", "CSS", "Python", "C++"]
    
    constructor(){}
    
    static getTodosCursos = () => {
        return this.cursos
    }

    static getCurso = (i) => {
        return this.cursos[i]
    }

    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso)
    }

    static apagarCursos = () => {
        this.cursos = []
    }
}

export default Cursos

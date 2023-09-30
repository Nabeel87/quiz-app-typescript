export const getQuizDetails = async (totalQuestions: number, level: string) => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let {results} = await res.json();
    console.log(results);
} 
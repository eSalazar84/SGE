export const base_url_students = "../data/students.json"
export const base_url_teachers = "../data/teachers.json"
export const base_url_subjects = "../data/subjects.json"
export const base_url_users = "https://64b16c09062767bc48262e69.mockapi.io/teachers"

const controller = new AbortController();

export const getAllRegisters = async (url) => {
    try {
        const res = await fetch(
            url,
            {
                method: "GET",
                headers: { Accept: "application/json" }
            },
            { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Response not ok");
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        throw err; //Propagate the error to the calling code
    }
};

export const deleteUserById = async id => {
    try {
        const res = await fetch(
            `${url}/${id}`,
            {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                },
            }
        );
        if (!res.ok) throw new Error("Response not ok");
        const data = await res.json();
        return data;
    } catch (err) {
        throw err; //Propagate the error to the calling code
    }
};

export const updateUserById = async (url, id, user) => {
    try {
        const res = await fetch(
            `${url}/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );
        if (!res.ok) throw new Error("Response not ok");
        const data = await res.json();
        return data;
    } catch (err) {
        throw err; //Propagate the error to the calling code
    }
};
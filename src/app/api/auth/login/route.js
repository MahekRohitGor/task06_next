import data from "../../../data/data";

export async function POST(request){
    const data_ = await request.json();

    const user = data.find((u) => u.email === data_.email && u.password === data_.password);

    if (user) {
        return new Response(JSON.stringify({ id: user.id, email: user.email, name: user.name, role: user.role }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } else {
        return new Response(null, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}
import { useNavigate } from "react-router";

export const MainPage = () => {
    const navigate = useNavigate();

    return (
        <section>
            <h1>Main</h1>
            <button onClick={() => navigate('/remote')}>Go to remote</button>
        </section>
    )
};

import React from 'react';
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import {api} from "../../setup/api";
import {route} from "../../setup/route";
import {fetcher} from "../../Partial/fetcher/fetcher";
import Breackpoint from "rssr-breackpoint";
import Namespace from "rssr-namespace";
import {fetching} from "../../setup/utility/fetching";
import "./home.scss";


function Home(props) {
    const {homepage} = props;

    return (
        <Namespace namespace="home">
            <div className="container">
                <Helmet title="صفحه ‌اصلی"/>

                <div className="jumbotron mt-3" id="abc">
                    <h5>موفقیت اتفاقی نیست!</h5>
                    <p className="lead">
                        برای خلق بهترین‌ها باید بیشتر تلاش کرد، چیزی که ساده به دست بیاد، می‌تونه خیلی ساده هم از دست بره.
                    </p>
                </div>
                <Breackpoint from="md">
                    {
                        () => (
                            <div className="alert alert-info">مثالی برای Breackpoint</div>
                        )
                    }
                </Breackpoint>

                <div className="row">
                    {
                        (homepage.isLoading) ?
                            (
                                <div className="col-24 text-center">
                                    <img src="/asset/img/loading.gif" alt="loading"/>
                                    <div> در حال بار گذاری مطالب</div>
                                </div>
                            )
                            :
                            (
                                homepage.map((item) => (
                                    <div className="col-md-8 my-2 px-3 animated fadeIn" key={item.id}>
                                        <Link to={route.post(item.id)} className="card">
                                            <div className="card-body">
                                                <h3 className="card-title text-truncate h6">{item.title}</h3>
                                                <p className="card-text text-truncate">{item.body}</p>
                                                <span>مشاهده مطلب</span>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            )
                    }
                </div>
            </div>
        </Namespace>
    )
}


const fetch = () => fetching({url: api.posts})

export default fetcher(Home, fetch, 'homepage');

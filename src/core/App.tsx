import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ROUTES from './../routes/ROUTES'

import Sidebar from './../components/Sidebar/Sidebar'
import AppLayout from './../layouts/AppLayout'

import {
    Login,
    History,
    Vision,
    Trophies,
    Gallery,
    Home,
    Juniors,
    Cadets,
    MiniVolley,
    Youth,
    Matches,
    News,
    New,
    NotFound,
    Partners,
    Coaches,
    Players,
} from './../pages'

function App() {
    return (
        <div>
            <Router>
                <Sidebar />
                <AppLayout>
                    <Routes>
                        {/* home */}
                        <Route path={ROUTES.home.path} element={<Home />} />

                        {/* details */}
                        <Route path={ROUTES.details.path}>
                            <Route
                                path={ROUTES.trophies.path}
                                element={<Trophies />}
                            />
                            <Route
                                path={ROUTES.history.path}
                                element={<History />}
                            />
                            <Route
                                path={ROUTES.vision.path}
                                element={<Vision />}
                            />
                        </Route>

                        {/* personnel */}
                        <Route path={ROUTES.personnel.path}>
                            <Route
                                path={ROUTES.coaches.path}
                                element={<Coaches />}
                            />
                            <Route
                                path={ROUTES.players.path}
                                element={<Players />}
                            />
                        </Route>

                        {/* seniors */}
                        {/* <Route
                            path={ROUTES.seniors.path}
                            element={<Seniors />}
                        /> */}

                        {/* juvenile */}
                        <Route path={ROUTES.juvenile.path}>
                            <Route
                                path={ROUTES.juniors.path}
                                element={<Juniors />}
                            />
                            <Route
                                path={ROUTES.youth.path}
                                element={<Youth />}
                            />
                            <Route
                                path={ROUTES.cadets.path}
                                element={<Cadets />}
                            />
                            <Route
                                path={ROUTES.minivolley.path}
                                element={<MiniVolley />}
                            />
                        </Route>

                        {/* matches */}
                        <Route
                            path={ROUTES.matches.path}
                            element={<Matches />}
                        />

                        {/* news */}
                        <Route path={ROUTES.news.path} element={<News />} />
                        <Route
                            path={`${ROUTES.news.path}/:id`}
                            element={<New />}
                        />

                        {/* partners */}
                        <Route
                            path={ROUTES.partners.path}
                            element={<Partners />}
                        />

                        {/* gallery */}
                        <Route
                            path={ROUTES.gallery.path}
                            element={<Gallery />}
                        />

                        {/* admin */}
                        <Route path={ROUTES.admin.path}>
                            <Route
                                path={ROUTES.login.path}
                                element={<Login />}
                            />
                        </Route>

                        {/* other */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AppLayout>
            </Router>
        </div>
    )
}

export default App

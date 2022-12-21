import React, { useContext, useState } from 'react';
import { Modal, Radio, Checkbox, Col, Row } from 'antd';
import { MainContext } from '../../contexts/MainContext';

const Programs = () => {
    const { open, setOpen } = useContext(MainContext)
    const [sessions, setSessions] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState([]);
    const [grades, setGrades] = useState([]);

  
    return (
        <div className='Programs'>
            <Modal
                title="Get Spin And Learn Program"

                centered
                open={open}
                footer={null}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={500}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className='mb-3'>
                        <h5>How many sessions (weeks) would like to have?</h5>
                        <Radio.Group onChange={(e) => setSessions(e.target.value)} className="column" value={sessions}>
                            <div>
                                <Radio value={10}>10 Sessions</Radio>
                            </div>
                            <div>
                                <Radio value={20}>20 Sessions</Radio>
                            </div>
                            <div>
                                <Radio value={"all"}>All Year Program</Radio>
                            </div>
                        </Radio.Group>
                    </div>
                    <div className='mb-3'>
                        <h5>How many days would you like the program for?</h5>
                        <Checkbox.Group style={{ width: '100%', }} value={days} onChange={(values) => setDays(values)}>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="A">Monday</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B">Tuesday</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C">Wednesday</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="D">Thrusday</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="E">Friday</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="J">Saturday</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </div>
                    <div className='mb-3'>
                        <h5>How many hours would you like the program for</h5>
                        <Radio.Group onChange={(e) => setHours(e.target.value)} className="column" value={hours}>
                            <div>
                                <Radio value={2}>2 hours</Radio>
                            </div>
                            <div>
                                <Radio value={3}>3 hours</Radio>
                            </div>
                            <div>
                                <Radio value={4}>4 hours</Radio>
                            </div>
                        </Radio.Group>
                    </div>
                    <div className='mb-3'>
                        <h5>Which grade(s) will be part of the program?</h5>
                        <Checkbox.Group style={{ width: '100%', }} value={grades} onChange={(values) => setGrades(values)}>
                            <Row>
                                <Col span={10}>
                                    <Checkbox value="A">Pre-K</Checkbox>
                                </Col>
                                <Col span={10}>
                                    <Checkbox value="B">Elementary</Checkbox>
                                </Col>
                                <Col span={10}>
                                    <Checkbox value="C">Middle School</Checkbox>
                                </Col>
                                <Col span={10}>
                                    <Checkbox value="D">High School</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop: 30}}>
                        <button onClick={() => ('/students')} className='bg-hover'>
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default Programs;

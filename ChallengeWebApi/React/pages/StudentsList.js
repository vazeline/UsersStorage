
    
    //render(){
    //    let listItems = [];
    //    for (let i in this.state.studentItems)
    //    {
    //        let stud= this.state.studentItems[i];
    //        listItems.push(<ListItem style={{ color: 'white' }} value={stud} key={stud.firebaseID} primaryText={stud.lastName+' '+stud.name} />);
    //    }
    //    return(<aside className="mainAside">
    //                <img src={urls.getUrl("/pages_logo.png")} style={{ width: '100%' }} />
    //                <div className="aside">
    //                    <div>
    //                        <span className='selectClass'>Select Class</span>
    //                        <span className='addClass' onClick={(event) => this.addClass(event)}>ADD CLASS</span>
    //                    </div>
    //                    <div style={{whiteSpace:'nowrap',margin: '0px 10px 10px'}}>
    //                        <DropDownMenu maxHeight={300}
    //                            style={{...st.dropdownClasses}}
    //                            labelStyle={st.ddlLabel}
    //                            iconStyle={st.ddlIcon}
    //                            value={this.state.selectedClass}
    //                            underlineStyle={{ display: 'none' }}
    //                            menuStyle={{ width: '290px' }}
    //                            autoWidth={false}
    //                            onChange={this.onClassSelected.bind(this)}>
    //                            {this.state.classItems}
    //                        </DropDownMenu>
    //                        <IconMenu style={{ right:'43px', borderLeft:'solid 1px #DAEAF7', paddingLeft:'9px', height:'100%', top:'1px' }}
    //                            iconButtonElement={<IconButton style={st.settingsMenuIcon}>
    //                                <img src={urls.getUrl("/settings.svg")} className="imgSettings" /></IconButton>}
    //                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    //                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
    //                            <MenuItem primaryText="Export Class Goals" />
    //                            <MenuItem primaryText="Delete Class" />
    //                        </IconMenu>
    //                    </div>
    //                    <div style={{whiteSpace:'nowrap'}}>
    //                        <TextField 
    //                        hintText="Seach students"
    //                        name="search"
    //                        value={this.state.search}
    //                        underlineShow={false}
    //                        style={{...st.textFieldStyle, margin:'0 10px', width: '300px', float:'left'}}
    //                        inputStyle={{...st.inputStyle, maxWidth: '290px'}}
    //                        hintStyle={{ bottom: '6px', paddingLeft:'10px' }}
    //                        onChange={this.onSearchChanged.bind(this)}
    //                        onKeyPress={this.searchKeyPress.bind(this)}
    //                        />
    //                        <IconButton className="right"
    //                        onClick={()=> this.searchStud()}
    //                        style={{...st.settingsMenuIcon, paddingRight: '9px', right:'53px', borderLeft:'solid 1px #DAEAF7', backgroundColor:'#DAEAF7', paddingLeft:'9px', height:'100%', minHeight:'36px'}}>
    //                        <img src={urls.getUrl("/search.svg")} className="imgSettingsSearch" /></IconButton>
    //                    </div>
    //                    <div className="asideStudents">
    //                        <span className='selectClass' onClick={this.sortStudents.bind(this)}>Sort by Name (A-Z) <span style={{ fontWeight: 'bold' }}>{this.state.sortText}</span></span>
    //                        <span className='addClass' onClick={(event) => this.addStudent(event)}>ADD STUDENT</span>
    //                    </div>
    //                    <SelectableList defaultValue={0} setSelected={this.setSelected.bind(this)}>
    //                        {listItems}
    //                    </SelectableList>
    //                </div>
    //                <AddDialog 
    //                    addOpen={this.state.addOpen}
    //                    classItems={this.state.classItems}
    //                    handleClose={this.handleClose.bind(this)}
    //                    class={this.state.class} 
    //                    getForm={(form) => { this.form = form; }}
    //                    handleAddClass={this.handleAddClass.bind(this)}
    //                    handleSubmit={this.handleSubmit.bind(this)}
    //                    setSelectedClasses={((event, index, value) => this.setState({ selectedDlgClasses: value })).bind(this)} />
    //            </aside>
                
    //        );
    //}

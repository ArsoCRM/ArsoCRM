<?php
/* +**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.1
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 * ********************************************************************************** */

class Calendar_Picklist_UIType extends Vtiger_Picklist_UIType
{
	/**
	 * {@inheritdoc}
	 */
	public function getListSearchTemplateName()
	{
		$fieldName = $this->get('field')->get('name');

		if ($fieldName == 'activitystatus') {
			return 'List/Field/StatusPickList.tpl';
		} elseif ($fieldName == 'activitytype') {
			return 'List/Field/ActivityPicklist.tpl';
		}

		return parent::getListSearchTemplateName();
	}
}

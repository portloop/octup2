<?php
/**
 * PropertyUpdate
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  HubSpot\Client\Crm\Properties
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Properties
 *
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * The version of the OpenAPI document: v3
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 6.0.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace HubSpot\Client\Crm\Properties\Model;

use \ArrayAccess;
use \HubSpot\Client\Crm\Properties\ObjectSerializer;

/**
 * PropertyUpdate Class Doc Comment
 *
 * @category Class
 * @package  HubSpot\Client\Crm\Properties
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PropertyUpdate implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PropertyUpdate';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'label' => 'string',
        'type' => 'string',
        'field_type' => 'string',
        'group_name' => 'string',
        'description' => 'string',
        'options' => '\HubSpot\Client\Crm\Properties\Model\OptionInput[]',
        'display_order' => 'int',
        'hidden' => 'bool',
        'form_field' => 'bool',
        'calculation_formula' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'label' => null,
        'type' => null,
        'field_type' => null,
        'group_name' => null,
        'description' => null,
        'options' => null,
        'display_order' => 'int32',
        'hidden' => null,
        'form_field' => null,
        'calculation_formula' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'label' => 'label',
        'type' => 'type',
        'field_type' => 'fieldType',
        'group_name' => 'groupName',
        'description' => 'description',
        'options' => 'options',
        'display_order' => 'displayOrder',
        'hidden' => 'hidden',
        'form_field' => 'formField',
        'calculation_formula' => 'calculationFormula'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'label' => 'setLabel',
        'type' => 'setType',
        'field_type' => 'setFieldType',
        'group_name' => 'setGroupName',
        'description' => 'setDescription',
        'options' => 'setOptions',
        'display_order' => 'setDisplayOrder',
        'hidden' => 'setHidden',
        'form_field' => 'setFormField',
        'calculation_formula' => 'setCalculationFormula'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'label' => 'getLabel',
        'type' => 'getType',
        'field_type' => 'getFieldType',
        'group_name' => 'getGroupName',
        'description' => 'getDescription',
        'options' => 'getOptions',
        'display_order' => 'getDisplayOrder',
        'hidden' => 'getHidden',
        'form_field' => 'getFormField',
        'calculation_formula' => 'getCalculationFormula'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    public const TYPE_STRING = 'string';
    public const TYPE_NUMBER = 'number';
    public const TYPE_DATE = 'date';
    public const TYPE_DATETIME = 'datetime';
    public const TYPE_ENUMERATION = 'enumeration';
    public const TYPE_BOOL = 'bool';
    public const FIELD_TYPE_TEXTAREA = 'textarea';
    public const FIELD_TYPE_TEXT = 'text';
    public const FIELD_TYPE_DATE = 'date';
    public const FIELD_TYPE_FILE = 'file';
    public const FIELD_TYPE_NUMBER = 'number';
    public const FIELD_TYPE_SELECT = 'select';
    public const FIELD_TYPE_RADIO = 'radio';
    public const FIELD_TYPE_CHECKBOX = 'checkbox';
    public const FIELD_TYPE_BOOLEANCHECKBOX = 'booleancheckbox';
    public const FIELD_TYPE_CALCULATION_EQUATION = 'calculation_equation';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTypeAllowableValues()
    {
        return [
            self::TYPE_STRING,
            self::TYPE_NUMBER,
            self::TYPE_DATE,
            self::TYPE_DATETIME,
            self::TYPE_ENUMERATION,
            self::TYPE_BOOL,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getFieldTypeAllowableValues()
    {
        return [
            self::FIELD_TYPE_TEXTAREA,
            self::FIELD_TYPE_TEXT,
            self::FIELD_TYPE_DATE,
            self::FIELD_TYPE_FILE,
            self::FIELD_TYPE_NUMBER,
            self::FIELD_TYPE_SELECT,
            self::FIELD_TYPE_RADIO,
            self::FIELD_TYPE_CHECKBOX,
            self::FIELD_TYPE_BOOLEANCHECKBOX,
            self::FIELD_TYPE_CALCULATION_EQUATION,
        ];
    }

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['label'] = $data['label'] ?? null;
        $this->container['type'] = $data['type'] ?? null;
        $this->container['field_type'] = $data['field_type'] ?? null;
        $this->container['group_name'] = $data['group_name'] ?? null;
        $this->container['description'] = $data['description'] ?? null;
        $this->container['options'] = $data['options'] ?? null;
        $this->container['display_order'] = $data['display_order'] ?? null;
        $this->container['hidden'] = $data['hidden'] ?? null;
        $this->container['form_field'] = $data['form_field'] ?? null;
        $this->container['calculation_formula'] = $data['calculation_formula'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        $allowedValues = $this->getTypeAllowableValues();
        if (!is_null($this->container['type']) && !in_array($this->container['type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'type', must be one of '%s'",
                $this->container['type'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getFieldTypeAllowableValues();
        if (!is_null($this->container['field_type']) && !in_array($this->container['field_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'field_type', must be one of '%s'",
                $this->container['field_type'],
                implode("', '", $allowedValues)
            );
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets label
     *
     * @return string|null
     */
    public function getLabel()
    {
        return $this->container['label'];
    }

    /**
     * Sets label
     *
     * @param string|null $label A human-readable property label that will be shown in HubSpot.
     *
     * @return self
     */
    public function setLabel($label)
    {
        $this->container['label'] = $label;

        return $this;
    }

    /**
     * Gets type
     *
     * @return string|null
     */
    public function getType()
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param string|null $type The data type of the property.
     *
     * @return self
     */
    public function setType($type)
    {
        $allowedValues = $this->getTypeAllowableValues();
        if (!is_null($type) && !in_array($type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'type', must be one of '%s'",
                    $type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['type'] = $type;

        return $this;
    }

    /**
     * Gets field_type
     *
     * @return string|null
     */
    public function getFieldType()
    {
        return $this->container['field_type'];
    }

    /**
     * Sets field_type
     *
     * @param string|null $field_type Controls how the property appears in HubSpot.
     *
     * @return self
     */
    public function setFieldType($field_type)
    {
        $allowedValues = $this->getFieldTypeAllowableValues();
        if (!is_null($field_type) && !in_array($field_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'field_type', must be one of '%s'",
                    $field_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['field_type'] = $field_type;

        return $this;
    }

    /**
     * Gets group_name
     *
     * @return string|null
     */
    public function getGroupName()
    {
        return $this->container['group_name'];
    }

    /**
     * Sets group_name
     *
     * @param string|null $group_name The name of the property group the property belongs to.
     *
     * @return self
     */
    public function setGroupName($group_name)
    {
        $this->container['group_name'] = $group_name;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string|null $description A description of the property that will be shown as help text in HubSpot.
     *
     * @return self
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets options
     *
     * @return \HubSpot\Client\Crm\Properties\Model\OptionInput[]|null
     */
    public function getOptions()
    {
        return $this->container['options'];
    }

    /**
     * Sets options
     *
     * @param \HubSpot\Client\Crm\Properties\Model\OptionInput[]|null $options A list of valid options for the property.
     *
     * @return self
     */
    public function setOptions($options)
    {
        $this->container['options'] = $options;

        return $this;
    }

    /**
     * Gets display_order
     *
     * @return int|null
     */
    public function getDisplayOrder()
    {
        return $this->container['display_order'];
    }

    /**
     * Sets display_order
     *
     * @param int|null $display_order Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the Property to be displayed after any positive values.
     *
     * @return self
     */
    public function setDisplayOrder($display_order)
    {
        $this->container['display_order'] = $display_order;

        return $this;
    }

    /**
     * Gets hidden
     *
     * @return bool|null
     */
    public function getHidden()
    {
        return $this->container['hidden'];
    }

    /**
     * Sets hidden
     *
     * @param bool|null $hidden If true, the property won't be visible and can't be used in HubSpot.
     *
     * @return self
     */
    public function setHidden($hidden)
    {
        $this->container['hidden'] = $hidden;

        return $this;
    }

    /**
     * Gets form_field
     *
     * @return bool|null
     */
    public function getFormField()
    {
        return $this->container['form_field'];
    }

    /**
     * Sets form_field
     *
     * @param bool|null $form_field Whether or not the property can be used in a HubSpot form.
     *
     * @return self
     */
    public function setFormField($form_field)
    {
        $this->container['form_field'] = $form_field;

        return $this;
    }

    /**
     * Gets calculation_formula
     *
     * @return string|null
     */
    public function getCalculationFormula()
    {
        return $this->container['calculation_formula'];
    }

    /**
     * Sets calculation_formula
     *
     * @param string|null $calculation_formula Represents a formula that is used to compute a calculated property.
     *
     * @return self
     */
    public function setCalculationFormula($calculation_formula)
    {
        $this->container['calculation_formula'] = $calculation_formula;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


